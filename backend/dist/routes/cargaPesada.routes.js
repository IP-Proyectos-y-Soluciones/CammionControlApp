"use strict";

var _express = require("express");
var _cargaPesada = require("../controllers/cargaPesada.controller");
var _verifyToken = require("../authentication/tokens/verifyToken");
var router = (0, _express.Router)();
router.post('/addcargapesada', _verifyToken.TokenValidation, _cargaPesada.createHeavyLoadForm);
router.get('/', _verifyToken.TokenValidation, _cargaPesada.getAllHeavyLoadForms);
router.get('/planilla/:n_planilla', _verifyToken.TokenValidation, _cargaPesada.getHeavyLoadByFormNumber);
router.patch('/planilla/edit/:n_planilla', _verifyToken.TokenValidation, _cargaPesada.updateHeavyLoadForm);
router["delete"]('/planilla/delete/:n_planilla', _verifyToken.TokenValidation, _cargaPesada.deleteHeavyLoadForm);