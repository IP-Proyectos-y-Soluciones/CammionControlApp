"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _login = require("../authentication/login/login.controller");
var router = (0, _express.Router)();
router.post('/login', _login.login);
var _default = exports["default"] = router;