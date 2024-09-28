"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cloudinarys = require("../controllers/cloudinarys.controller");
var _express = require("express");
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

var router = (0, _express.Router)();
router.post('/upload',
// TokenValidation,
_cloudinarys.parser, _cloudinarys.uploadImage);
router.get('/',
//TokenValidation,
_cloudinarys.getImagesFromCloudinay);
router["delete"]('/delete/:id',
// TokenValidation,
_cloudinarys.deleteImageById);
router.get('/:id',
// TokenValidation,
_cloudinarys.getImageById);
router.put('/update/:id',
// TokenValidation,
_cloudinarys.updateImageById);
var _default = exports["default"] = router;