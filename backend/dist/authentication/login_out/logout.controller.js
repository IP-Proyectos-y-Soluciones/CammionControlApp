"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = void 0;
var _changeStatusLogin = require("../../libs/changeStatusLogin");
var logout = exports.logout = function logout(req, res) {
  // res.cookie('auth-token', '', {
  //   expires: new Date(0),
  //   sameSite: 'none',
  //   secure: true,
  // });
  // res.cookie('csrf-token', '', {
  //   expires: new Date(0),
  //   sameSite: 'none',
  //   secure: true,
  // });
  // res.cookie('csrf-secret', '', {
  //   expires: new Date(0),
  //   sameSite: 'none',
  //   secure: true,
  // });

  return (0, _changeStatusLogin.ChangeStatusLogin)(req, res, false, 1);

  // return res
  //   .status(200)
  //   .json({ message: 'Cierre de sesión exitoso...!' });
};