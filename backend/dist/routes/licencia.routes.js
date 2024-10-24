"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _licencias = require("../controllers/licencias.controller");
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

var router = (0, _express.Router)();
router.post("/addlicencia", _licencias.parser,
// TokenValidation,
_licencias.createLicencia);
router.get("/",
// TokenValidation,
_licencias.getLicencia);
<<<<<<< HEAD
router.get('/licencia/:id',
// TokenValidation,
_licencias.getLicenciaByID);
router.put('/edit/:id',
=======
router.put("/edit/:id", _licencias.parser,
>>>>>>> origin/Dianis2
// TokenValidation,
_licencias.putLicencia);
router["delete"]("/del/:id",
// TokenValidation,
_licencias.deleteLicencia);
var _default = exports["default"] = router;