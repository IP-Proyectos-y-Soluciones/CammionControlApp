"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _login = require("../authentication/login_out/login.controller");
var _logout = require("../authentication/login_out/logout.controller");
var _auxAuthMiddleware = require("../middlewares/auxAuthMiddleware");
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...
// Eliminar para prodcc...

var router = (0, _express.Router)();
router.post('/login', _login.login);
router.post('/logout', _logout.logout);

// router.get('/check', TokenValidation, (req, res) => {
//   res.json({ isAuthenticated: true });
// });

router.get('/checklogin', _auxAuthMiddleware.AuxAuthMiddleware, function (req, res) {
  res.json({
    isAuthenticated: true,
    user: {
      roles: req.session.roles
    }
  });
});

// *********** || Rutas auxiliares para el Front... || ************ //

router.get('/driverced/:cedula',
// TokenValidation,
_login.getDriverByDNI);
router.get('/vehicleid/:id',
// TokenValidation,
_login.getVehicleById);

// ***************************************************** //
var _default = exports["default"] = router;