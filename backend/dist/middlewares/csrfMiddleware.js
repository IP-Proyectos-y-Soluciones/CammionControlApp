"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyCsrfToken = exports.handleCsrfError = exports.generateCsrfToken = exports["default"] = void 0;
var _csrf = _interopRequireDefault(require("csrf"));
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var csrfProtection = new _csrf["default"]();
var router = (0, _express["default"])();

// Middleware para generar y enviar el token CSRF...
var generateCsrfToken = exports.generateCsrfToken = function generateCsrfToken(req, res, next) {
  if (!req.cookies['csrf-secret']) {
    var secret = csrfProtection.secretSync();
    res.cookie('csrf-secret', secret, {
      httpOnly: true,
      secure: true,
      sameSite: 'None'
      // partitioned: true,
    });
    // Se debe añadir esto, para que esté disponible en esta solicitud...
    req.cookies['csrf-secret'] = secret;
  }
  var csrfToken = csrfProtection.create(req.cookies['csrf-secret'] || csrfProtection.secretSync());
  res.cookie('csrf-token', csrfToken, {
    // httpOnly: true,
    Secure: true,
    SameSite: 'None'
    // partitioned: true,
  });
  res.locals.csrfToken = csrfToken;
  next();
};

// Middleware para verificar el token CSRF...
var verifyCsrfToken = exports.verifyCsrfToken = function verifyCsrfToken(req, res, next) {
  // Se obtiene el token de los headers...
  var csrfToken = req.headers['csrf-token'];
  var csrfSecret = req.cookies['csrf-secret'];
  if (csrfProtection.verify(csrfSecret, csrfToken)) {
    next();
  } else {
    res.status(403).json({
      message: 'Token CSRF inválido o perdido...'
    });
  }
};

// Ruta para obtener el token CSRF...
router.get('/api/csrf-token', function (req, res) {
  res.json({
    csrfToken: res.locals.csrfToken
  });
});
var handleCsrfError = exports.handleCsrfError = function handleCsrfError(err, req, res, next) {
  if (err.code === 'EBADCSRFTOKEN') {
    // Manejo de error CSRF
    res.status(403).json({
      message: 'Token CSRF inválido o perdido...'
    });
  } else {
    next(err);
  }
};
var _default = exports["default"] = router;