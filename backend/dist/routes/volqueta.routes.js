"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _volquetas = require("../controllers/volquetas.controller");
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

var router = (0, _express.Router)();
router.post("/addplanilla",
// TokenValidation,
_volquetas.createVolqueta);
router.get("/",
// TokenValidation,
_volquetas.getVolqueta);
router.put("/:n_planilla?",
// TokenValidation,
_volquetas.putVolqueta);
router["delete"]("/:n_planilla?",
// TokenValidation,
_volquetas.deleteVolqueta);
var _default = exports["default"] = router;