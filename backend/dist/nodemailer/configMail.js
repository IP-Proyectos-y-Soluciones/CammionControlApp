"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _nodemailer = _interopRequireDefault(require("nodemailer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _process$env = process.env,
  EMAIL = _process$env.EMAIL,
  PASSWORD_MAIL = _process$env.PASSWORD_MAIL,
  HOST_MAIL = _process$env.HOST_MAIL,
  PORT_MAIL = _process$env.PORT_MAIL;
var transporter = _nodemailer["default"].createTransport({
  host: HOST_MAIL,
  port: PORT_MAIL,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD_MAIL
  }
});
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
var _default = exports["default"] = transporter;