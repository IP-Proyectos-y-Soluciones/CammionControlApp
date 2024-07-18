"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _verifyToken = require("../authentication/tokens/verifyToken");
var _vehiclesProv = require("../controllers/vehiclesProv.controller");
var router = (0, _express.Router)();
router.post('/addvehicle', _verifyToken.TokenValidation, _vehiclesProv.addNewVehicle);
var _default = exports["default"] = router;