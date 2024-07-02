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
var _personas = _interopRequireDefault(require("./routes/personas.routes"));
var _usuarios = _interopRequireDefault(require("./routes/usuarios.routes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var app = (0, _express["default"])();

// Settings...
app.set('port', process.env.PORT || 8585 || 3070);

// Middlewares...
app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
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
app.use('/api/personas', _personas["default"]);
app.use('/api/usuarios', _usuarios["default"]);

// Test route...
app.get('/', function (req, res) {
  res.end("Welcome to Backend Node.js Server. Running on port: ".concat(app.get('port'), "...!"));
});
var _default = exports["default"] = app;