"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _login = require("../authentication/login_out/login.controller");
var _logout = require("../authentication/login_out/logout.controller");
var _verifyToken = require("../authentication/tokens/verifyToken");
var router = (0, _express.Router)();
router.post('/login', _login.login);
router.post('/logout', _logout.logout);
router.get('/check', _verifyToken.TokenValidation, function (req, res) {
  res.json({
    isAuthenticated: true
  });
});
var _default = exports["default"] = router;