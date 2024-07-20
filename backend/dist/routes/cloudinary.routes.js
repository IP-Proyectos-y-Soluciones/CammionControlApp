"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cloudinarys = require("../controllers/cloudinarys.controller");
var _express = require("express");
var _verifyToken = require("../authentication/tokens/verifyToken");
var router = (0, _express.Router)();
router.post("/upload", _verifyToken.TokenValidation, _cloudinarys.parser, _cloudinarys.uploadImage);
router.get("/", _verifyToken.TokenValidation, _cloudinarys.getImagesFromCloudinay);
router["delete"]("/delete/:id", _verifyToken.TokenValidation, _cloudinarys.deleteImageById);
router.get("/:id", _verifyToken.TokenValidation, _cloudinarys.getImageById);
router.put("/update/:id", _verifyToken.TokenValidation, _cloudinarys.updateImageById);
var _default = exports["default"] = router;