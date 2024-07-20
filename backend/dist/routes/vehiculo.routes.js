"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _vehiculosController = require("../controllers/vehiculos.controller.js");
var _verifyToken = require("../authentication/tokens/verifyToken");
var router = (0, _express.Router)();
router.post("/create", _verifyToken.TokenValidation, _vehiculosController.createVehiculo);
router.get("/", _verifyToken.TokenValidation, _vehiculosController.getAllVehiculos);
router.get("/:id", _verifyToken.TokenValidation, _vehiculosController.getVehiculoById);
router.patch("/update/:id", _verifyToken.TokenValidation, _vehiculosController.updateVehiculo);
router["delete"]("/delete/:id", _verifyToken.TokenValidation, _vehiculosController.deleteVehiculo);
var _default = exports["default"] = router;