"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tanqueos = require("../controllers/tanqueos.controller");
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

var router = (0, _express.Router)();
router.post('/create',
// TokenValidation,
_tanqueos.createTanqueo);
router.get('/',
// TokenValidation,
_tanqueos.getAllTanqueos);
router.get('/:id',
// TokenValidation,
_tanqueos.getTanqueoById);
router.patch('/update/:id',
// TokenValidation,
_tanqueos.updateTanqueo);
router["delete"]('/delete/:id',
// TokenValidation,
_tanqueos.deleteTanqueo);
var _default = exports["default"] = router;