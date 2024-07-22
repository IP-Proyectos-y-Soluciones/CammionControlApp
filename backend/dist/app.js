"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _csrf = _interopRequireDefault(require("csrf"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _cargaPesada = _interopRequireDefault(require("./routes/cargaPesada.routes"));
var _cloudinary = _interopRequireDefault(require("./routes/cloudinary.routes"));
var _documento = _interopRequireDefault(require("./routes/documento.routes"));
var _licencia = _interopRequireDefault(require("./routes/licencia.routes"));
var _mecanico = _interopRequireDefault(require("./routes/mecanico.routes"));
var _persona = _interopRequireDefault(require("./routes/persona.routes"));
var _tanqueo = _interopRequireDefault(require("./routes/tanqueo.routes"));
var _usuario = _interopRequireDefault(require("./routes/usuario.routes"));
var _vehiculo = _interopRequireDefault(require("./routes/vehiculo.routes"));
var _volqueta = _interopRequireDefault(require("./routes/volqueta.routes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
var csrfProtection = new _csrf["default"]();

// Settings...
app.set('port', process.env.PORT || 8585 || 3070);

// Middlewares...
app.use((0, _morgan["default"])('dev'));
// app.use(
//   cors({
//     origin: 'http://localhost:5173',
//     credentials: true,
//   }),
// );
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());

// Generar y enviar el token CSRF...
app.use(function (req, res, next) {
  if (!req.cookies['csrf-secret']) {
    var secret = csrfProtection.secretSync();
    res.cookie('csrf-secret', secret, {
      sameSite: 'none',
      secure: true
    });
    req.cookies['csrf-secret'] = secret; // Se debe añadir esto, para que esté disponible en esta solicitud
  }
  var csrfToken = csrfProtection.create(req.cookies['csrf-secret'] || csrfProtection.secretSync());
  res.cookie('csrf-token', csrfToken, {
    sameSite: 'none',
    secure: true
  });
  res.locals.csrfToken = csrfToken;
  next();
});

// Middleware para verificar el token CSRF...
var verifyCsrfToken = function verifyCsrfToken(req, res, next) {
  var csrfToken = req.headers['csrf-token']; // Se obtiene el token de los headers...
  var csrfSecret = req.cookies['csrf-secret'];
  if (csrfProtection.verify(csrfSecret, csrfToken)) {
    next();
  } else {
    res.status(403).json({
      message: 'Token CSRF inválido o perdido...'
    });
  }
};

// Routes...
app.use('/api/auth', _auth["default"]);
app.use('/api/cargapesada', _cargaPesada["default"]);
app.use('/api/cloudinary', _cloudinary["default"]);
app.use('/api/documentos', _documento["default"]);
app.use('/api/licencias', _licencia["default"]);
app.use('/api/mecanicos', _mecanico["default"]);
// app.use('/api/personas', personasRoutes); // sin protección CSRF...
app.use('/api/personas', verifyCsrfToken, _persona["default"]); // CON PROTECCION CSRF...
app.use('/api/tanqueos', _tanqueo["default"]);
app.use('/api/usuarios', _usuario["default"]);
app.use('/api/vehiculos', _vehiculo["default"]);
app.use('/api/planillas', _volqueta["default"]);
app.use(function (err, req, res, next) {
  if (err.code === 'EBADCSRFTOKEN') {
    // Manejo de error CSRF
    res.status(403).json({
      message: 'Token CSRF inválido o perdido...'
    });
  } else {
    next(err);
  }
});

// Test route...
app.get('/', function (req, res) {
  res.end("Welcome to Backend Node.js Server. Running on port: ".concat(app.get('port'), "...!"));
});

// Ruta para obtener el token CSRF...
app.use('/api/csrf-token', function (req, res) {
  res.json({
    csrfToken: res.locals.csrfToken
  });
});
var _default = exports["default"] = app;