"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = void 0;
var logout = exports.logout = function logout(req, res) {
  res.cookie("auth-token", "", {
    expires: new Date(0)
  });
  return res.sendStatus(200);
};