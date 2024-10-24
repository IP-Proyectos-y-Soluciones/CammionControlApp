"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _volquetas = require("../controllers/volquetas.controller");
var _GenRandomControlNumb = require("../libs/GenRandomControlNumb");
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

var router = (0, _express.Router)();
<<<<<<< HEAD
router.get('/gennumber',
// TokenValidation,
function (req, res) {
  var numbOfForm = (0, _GenRandomControlNumb.generarNumeroPlanilla)();
  res.json({
    numbOfForm: numbOfForm
  });
});
router.post('/addplanilla',
=======
router.post("/addplanilla",
>>>>>>> origin/Dianis2
// TokenValidation,
_volquetas.createVolqueta);
router.get("/",
// TokenValidation,
_volquetas.getVolqueta);
<<<<<<< HEAD
router.patch('/edit/:id',
// TokenValidation,
_volquetas.putVolqueta);
router.patch('/edit/',
=======
router.put("/:n_planilla?",
>>>>>>> origin/Dianis2
// TokenValidation,
_volquetas.putVolqueta);
router["delete"]("/:n_planilla?",
// TokenValidation,
_volquetas.deleteVolqueta);
var _default = exports["default"] = router;