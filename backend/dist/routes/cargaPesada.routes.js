"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _cargaPesada = require("../controllers/cargaPesada.controller");
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para

var router = (0, _express.Router)();
router.post('/addplanillacarga',
// TokenValidation,
_cargaPesada.createHeavyLoadForm);
router.get('/',
// TokenValidation,
_cargaPesada.getAllHeavyLoadForms);
router.get('/planilla/:n_planilla',
// TokenValidation,
_cargaPesada.getHeavyLoadByFormNumber);
router.get('/planillaid/:_id',
// TokenValidation,
_cargaPesada.getHeavyLoadByFormID);

// router.patch(
//   '/planilla/edit/:n_planilla',
//   TokenValidation,
//   updateHeavyLoadForm,
// );

// router.delete(
//   '/planilla/delete/:n_planilla',
//   TokenValidation,
//   deleteHeavyLoadForm,
// );
var _default = exports["default"] = router;