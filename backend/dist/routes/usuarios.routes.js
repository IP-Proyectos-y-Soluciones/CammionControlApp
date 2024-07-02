"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usuarios = require("../controllers/usuarios.controller");
var _verifyToken = require("../authentication/tokens/verifyToken");
var _validateUser = require("../middlewares/validateUser");
var router = (0, _express.Router)();
router.post('/addusuario', _verifyToken.TokenValidation, _validateUser.validateUser, _usuarios.registrarUsuario);
var _default = exports["default"] = router;