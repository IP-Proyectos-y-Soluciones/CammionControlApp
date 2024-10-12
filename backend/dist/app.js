"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _connectMongo = _interopRequireDefault(require("connect-mongo"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _auxAuthMiddleware = require("./middlewares/auxAuthMiddleware");
var _authAdmMiddleware = require("./middlewares/authAdmMiddleware");
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
var _image = _interopRequireDefault(require("./routes/image.routes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import csrfMiddleware, {
//   generateCsrfToken,
//   verifyCsrfToken,
//   handleCsrfError,
// } from './middlewares/csrfMiddleware'; // Activar para la produccón..
//
// Debe suprimirse para producción (Posiblemente quede)...
//

_dotenv["default"].config();
var app = (0, _express["default"])();

// Settings...
app.set('port', process.env.PORT || 8585 || 3070);

// Configuración de express-session con connect-mongo...
app.use((0, _expressSession["default"])({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: _connectMongo["default"].create({
    mongoUrl: process.env.URLDB_DEV,
    // Inhibir para producción...
    // mongoUrl: process.env.URL_DB, // Activar para producción...
    collectionName: 'sessions',
    ttl: 2 * 24 * 60 * 60 // Opcional: Tiempo de vida de la sesión en segundos (aquí: 2 días)...
  }),
  cookie: {
    secure: false,
    // Cambia a true en producción con HTTPS...
    httpOnly: true,
    // Ayuda a prevenir ataques XSS...
    maxAge: 2 * 24 * 60 * 60 * 1000 // Opcional: Tiempo de vida de la cookie: 2 días en milisegundos...
  }
}));

// Middlewares...
app.use((0, _morgan["default"])('dev'));
// Aquí, la URL (Front local) debe sustituirse por la URL del Front desplegado...
app.use((0, _cors["default"])({
  origin: process.env.URL_FRONTEND_DEV,
  // origin: process.env.URL_FRONTEND_PROD,
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
app.use('/api/heavyload',
// verifyCsrfToken, // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
// AuthAdmMiddleware,
_cargaPesada["default"]);
//
app.use('/api/cloudinary',
// verifyCsrfToken, // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_cloudinary["default"]);
//
// Esta es una alternativa a cloudinary...
app.use('/api/images',
// verifyCsrfToken, // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware, _image["default"]);
//
app.use('/api/documentos',
// verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_authAdmMiddleware.AuthAdmMiddleware, _documento["default"]);
//
app.use('/api/licencias',
// verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_authAdmMiddleware.AuthAdmMiddleware, _licencia["default"]);
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
_authAdmMiddleware.AuthAdmMiddleware, _persona["default"]);
//
app.use('/api/refueling',
// antiguamente 'tanqueos'...
// verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_tanqueo["default"]);
//
app.use('/api/usuarios',
// verifyCsrfToken,
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción... ////////////////
_authAdmMiddleware.AuthAdmMiddleware, _usuario["default"]);
//
app.use('/api/vehiculos',
// verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Desactivar para la producción...
_authAdmMiddleware.AuthAdmMiddleware, _vehiculo["default"]);
//
app.use('/api/volquetas',
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