"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _documentos = require("../controllers/documentos.controller");
var _verifyToken = require("../authentication/tokens/verifyToken");
var router = (0, _express.Router)();
router.post("/", _verifyToken.TokenValidation, _documentos.createDocumento);
router.get("/", _verifyToken.TokenValidation, _documentos.getAllDocumento);
router.put("/:id", _verifyToken.TokenValidation, _documentos.putDocumento);
router["delete"]("/:id", _verifyToken.TokenValidation, _documentos.deleteDocumento);
var _default = exports["default"] = router;