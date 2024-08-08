"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _mecanicos = require("../controllers/mecanicos.controller");
// import { TokenValidation } from '../authentication/tokens/verifyToken';

var router = (0, _express.Router)();
router.post('/create',
// TokenValidation,
_mecanicos.createMecanico);
router.get('/',
// TokenValidation,
_mecanicos.getAllMecanicos);
router.get('/:id',
// TokenValidation,
_mecanicos.getMecanicoById);
router.patch('/update/:id',
// TokenValidation,
_mecanicos.updateMecanico);
router["delete"]('/delete/:id',
// TokenValidation,
_mecanicos.deleteMecanico);
var _default = exports["default"] = router;