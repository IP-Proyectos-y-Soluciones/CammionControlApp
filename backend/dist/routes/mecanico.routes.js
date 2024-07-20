"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _mecanicos = require("../controllers/mecanicos.controller");
var _verifyToken = require("../authentication/tokens/verifyToken");
var router = (0, _express.Router)();
router.post('/create', _verifyToken.TokenValidation, _mecanicos.createMecanico);
router.get('/', _verifyToken.TokenValidation, _mecanicos.getAllMecanicos);
router.get('/:id', _verifyToken.TokenValidation, _mecanicos.getMecanicoById);
router.patch('/update/:id', _verifyToken.TokenValidation, _mecanicos.updateMecanico);
router["delete"]('/delete/:id', _verifyToken.TokenValidation, _mecanicos.deleteMecanico);
var _default = exports["default"] = router;