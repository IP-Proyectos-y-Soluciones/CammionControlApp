"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _volquetas = require("../controllers/volquetas.controller");
var _verifyToken = require("../authentication/tokens/verifyToken");
var router = (0, _express.Router)();
router.post("/", _verifyToken.TokenValidation, _volquetas.createVolqueta);
router.get("/", _verifyToken.TokenValidation, _volquetas.getVolqueta);
router.put("/:id", _verifyToken.TokenValidation, _volquetas.putVolqueta);
router["delete"]("/:id", _verifyToken.TokenValidation, _volquetas.deleteVolqueta);
var _default = exports["default"] = router;