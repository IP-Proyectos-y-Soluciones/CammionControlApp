"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _personas = require("../controllers/personas.controller");
var _verifyToken = require("../authentication/tokens/verifyToken");
var router = (0, _express.Router)();
router.post('/addpersona', _verifyToken.TokenValidation, _personas.createPersona);
router.get('/', _verifyToken.TokenValidation, _personas.getAllPersonas);
router.get('/personaced/:cedula', _verifyToken.TokenValidation, _personas.getPersonaByDNI);
router.get('/personaid/:_id', _verifyToken.TokenValidation, _personas.getPersonaByID);
router.patch('/persona/edit/:_id', _verifyToken.TokenValidation, _personas.updatePersona);
router["delete"]('/persona/delete/:_id', _verifyToken.TokenValidation, _personas.deletePersona);
var _default = exports["default"] = router;