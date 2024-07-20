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

// Routes...
app.use('/api/auth', _auth["default"]);
app.use('/api/cargapesada', _cargaPesada["default"]);
app.use('/api/cloudinary', _cloudinary["default"]);
app.use('/api/documentos', _documento["default"]);
app.use('/api/licencias', _licencia["default"]);
app.use('/mecanicos', _mecanico["default"]);
app.use('/api/personas', _persona["default"]);
app.use('/tanqueos', _tanqueo["default"]);
app.use('/api/usuarios', _usuario["default"]);
app.use('/vehiculos', _vehiculo["default"]);
app.use('/api/planillas', _volqueta["default"]);

// Test route...
app.get('/', function (req, res) {
  res.end("Welcome to Backend Node.js Server. Running on port: ".concat(app.get('port'), "...!"));
});
var _default = exports["default"] = app;