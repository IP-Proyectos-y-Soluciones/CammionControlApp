"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.token = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var SECK = process.env.SKEY_TOKEN;
var token = exports.token = function token(savedUser) {
  var payload = {
    _id: savedUser.id,
    rol: savedUser.roles
  };
  return new Promise(function (resolve, reject) {
    _jsonwebtoken["default"].sign(payload, SECK, {
      expiresIn: '1d'
    }, function (err, token) {
      if (err) reject(err);
      resolve(token);
    });
  });
};