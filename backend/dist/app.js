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
var _auxAuthMiddleware = require("./middlewares/auxAuthMiddleware");
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _admin = _interopRequireDefault(require("./routes/admin.routes"));
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
// import csrfMiddleware, {
//   generateCsrfToken,
//   verifyCsrfToken,
//   handleCsrfError,
// } from './middlewares/csrfMiddleware'; // Activar para la produccón..
//
// Debe suprimirse para producción...
//

_dotenv["default"].config();
var app = (0, _express["default"])();

// Settings...
app.set('port', process.env.PORT || 8585 || 3070);

// Middlewares...
app.use((0, _morgan["default"])('dev'));
// Aquí, la URL (Front local) debe sustituirse por la URL del Front desplegado...
app.use((0, _cors["default"])({
  // origin: 'http://localhost:5173',
  origin: process.env.URL_FRONTEND_PROD,
  credentials: true
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());

// Middleware para generar el token CSRF...
// app.use(generateCsrfToken); Activar para la producción... // ******

// Routes...
app.use('/api/auth', _auth["default"]);
//
app.use('/api/admin',
// verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_admin["default"]);
//
app.use('/api/cargapesada',
// verifyCsrfToken, // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_cargaPesada["default"]);
//
app.use('/api/cloudinary',
// verifyCsrfToken, // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_cloudinary["default"]);
//
app.use('/api/documentos',
// verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_documento["default"]);
//
app.use('/api/licencias',
// verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_licencia["default"]);
//
app.use('/api/mecanicos',
// verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_mecanico["default"]);
//
app.use('/api/personas',
// verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_persona["default"]);
//
app.use('/api/tanqueos', _tanqueo["default"]);
app.use('/api/usuarios',
// verifyCsrfToken,
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_usuario["default"]);
//
app.use('/api/vehiculos',
// verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_vehiculo["default"]);
//
app.use('/api/planillas',
// verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_volqueta["default"]);

// // Ruta para obtener el token CSRF... // Activar
// app.use(csrfMiddleware);

// // Middleware para manejo de errores CSRF...
// app.use(handleCsrfError);

// Test route...
app.get('/', function (req, res) {
  res.end("Welcome to Backend Node.js Server. Running on port: ".concat(app.get('port'), "...!"));
});
var _default = exports["default"] = app;