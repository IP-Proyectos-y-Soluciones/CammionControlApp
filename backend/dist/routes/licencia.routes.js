"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _licencias = require("../controllers/licencias.controller");
// import { TokenValidation } from '../authentication/tokens/verifyToken';

var router = (0, _express.Router)();
router.post('/',
// TokenValidation,
_licencias.createLicencia);
router.get('/',
// TokenValidation,
_licencias.getLicencia);
router.put('/:id',
// TokenValidation,
_licencias.putLicencia);
router["delete"]('/:id',
// TokenValidation,
_licencias.deleteLicencia);
var _default = exports["default"] = router;