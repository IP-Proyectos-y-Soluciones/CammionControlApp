"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _vehiculosController = require("../controllers/vehiculos.controller.js");
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

var router = (0, _express.Router)();
router.post('/create',
// TokenValidation,
_vehiculosController.createVehiculo);
router.get('/',
// TokenValidation,
_vehiculosController.getAllVehiculos);
router.get('/:id',
// TokenValidation,
_vehiculosController.getVehiculoById);
router.patch('/update/:id',
// TokenValidation,
_vehiculosController.updateVehiculo);
router["delete"]('/delete/:id',
// TokenValidation,
_vehiculosController.deleteVehiculo);
var _default = exports["default"] = router;