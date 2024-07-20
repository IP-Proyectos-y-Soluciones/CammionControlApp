"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _licencias = require("../controllers/licencias.controller");
var _verifyToken = require("../authentication/tokens/verifyToken");
var router = (0, _express.Router)();
router.post('/', _verifyToken.TokenValidation, _licencias.createLicencia);
router.get('/', _verifyToken.TokenValidation, _licencias.getLicencia);
router.put('/:id', _verifyToken.TokenValidation, _licencias.putLicencia);
router["delete"]('/:id', _verifyToken.TokenValidation, _licencias.deleteLicencia);
var _default = exports["default"] = router;