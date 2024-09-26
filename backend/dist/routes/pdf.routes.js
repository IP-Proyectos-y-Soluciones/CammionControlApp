"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _plantilla_volquetas = require("../pdf-excel/plantilla_volquetas");
var _planilla_cargaPesada = require("../pdf-excel/planilla_cargaPesada");
var _verifyToken = require("../authentication/tokens/verifyToken");
var router = (0, _express.Router)();
router.post("/pdf", /* TokenValidation,*/_plantilla_volquetas.plantillaVolquetas);
router.post("/pdf", /* TokenValidation,*/_planilla_cargaPesada.plantillaCargaPesada);
var _default = exports["default"] = router;