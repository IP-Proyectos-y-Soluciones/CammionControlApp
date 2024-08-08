"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usuarios = require("../controllers/usuarios.controller");
var _validateUser = require("../middlewares/validateUser");
// import { TokenValidation } from '../authentication/tokens/verifyToken';

var router = (0, _express.Router)();
router.post('/addusuario',
// TokenValidation,
_validateUser.validateUser, _usuarios.registrarUsuario);
router.get('/',
// TokenValidation,
_usuarios.getAllUsuarios);
router.get('/:usuario',
// TokenValidation,
_usuarios.getUsuario);
router.patch('/edit/:_id',
// TokenValidation,
_usuarios.updateUsuario);
router["delete"]('/delete/:_id',
// TokenValidation,
_usuarios.deleteUsuario);
var _default = exports["default"] = router;