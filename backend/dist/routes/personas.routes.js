"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _personas = require("../controllers/personas.controller");
var router = (0, _express.Router)();
router.post('/addpersona', _personas.createPersona);
router.get('/', _personas.getAllPersonas);
router.get('/persona/:cedula', _personas.getPersonaByDNI);
var _default = exports["default"] = router;