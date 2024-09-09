"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _personas = require("../controllers/personas.controller");
var _validatePerson = require("../middlewares/validatePerson");
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

var router = (0, _express.Router)();
router.post('/addpersona',
// TokenValidation,
_validatePerson.validatePerson, _personas.createPersona);
router.get('/',
// TokenValidation,
_personas.getAllPersonas);
router.get('/personaced/:cedula',
// TokenValidation,
_personas.getPersonaByDNI);
router.get('/personaid/:_id',
// TokenValidation,
_personas.getPersonaByID);

// Para realizar actualización del empleado proporcionando
// por URL el _id del mismo registrado...
router.patch('/persona/edit/:_id',
// TokenValidation,
_personas.updatePersona);

// Para realizar actualización del empleado proporcionando
// por body el número de cédula...
router.patch('/persona/edit',
// TokenValidation,
_personas.updatePersona);

// Para eliminar un empleado proporcionando
// por URL el _id del mismo registrado...
router["delete"]('/persona/delete/:_id',
// TokenValidation,
_personas.deletePersona);

// Para eliminar un empleado proporcionando
// por body el número de cédula...
router["delete"]('/persona/delete',
// TokenValidation,
_personas.deletePersona);
var _default = exports["default"] = router;