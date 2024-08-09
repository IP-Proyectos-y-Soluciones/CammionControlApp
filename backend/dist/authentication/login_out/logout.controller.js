"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = void 0;
var _changeStatusLogin = require("../../libs/changeStatusLogin");
var logout = exports.logout = function logout(req, res) {
  try {
    (0, _changeStatusLogin.ChangeLoginStatus)(false, 1);
    return res.status(200).json({
      message: 'You are logout...!'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al intentar cambiar estado de login',
      error: error.message
    });
  }

  // return res
  //   .status(200)
  //   .json({ message: 'Cierre de sesión exitoso...!' });
};