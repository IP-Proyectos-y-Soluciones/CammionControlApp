"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _documentos = require("../controllers/documentos.controller");
// import { TokenValidation } from '../authentication/tokens/verifyToken'; Activar para la producción...

var router = (0, _express.Router)();
router.post('/newdoc',
// TokenValidation,
_documentos.createDocumento);
router.get('/',
// TokenValidation,
_documentos.getAllDocumento);
router.put('/:id',
// TokenValidation,
_documentos.putDocumento);
router["delete"]('/:id',
// TokenValidation,
_documentos.deleteDocumento);
var _default = exports["default"] = router;