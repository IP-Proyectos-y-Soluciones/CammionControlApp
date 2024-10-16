"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _images = require("../controllers/images.controller");
var router = (0, _express.Router)();
router.get('/image/:cedula/:recibo', _images.getRefuelingImageByDNIAndInvoice);
var _default = exports["default"] = router;