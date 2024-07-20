"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tanqueos = require("../controllers/tanqueos.controller");
var _verifyToken = require("../authentication/tokens/verifyToken");
var router = (0, _express.Router)();
router.post('/create', _verifyToken.TokenValidation, _tanqueos.parser, _tanqueos.createTanqueo);
router.get('/', _verifyToken.TokenValidation, _tanqueos.getAllTanqueos);
router.get('/:id', _verifyToken.TokenValidation, _tanqueos.getTanqueoById);
router.patch('/update/:id', _verifyToken.TokenValidation, _tanqueos.parser, _tanqueos.updateTanqueo);
router["delete"]('/delete/:id', _verifyToken.TokenValidation, _tanqueos.deleteTanqueo);
var _default = exports["default"] = router;