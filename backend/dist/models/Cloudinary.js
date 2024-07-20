"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require('mongoose');
var cloudinarySchema = new mongoose.Schema({
  url: String
}, {
  timestamps: false,
  autoCreate: false
});
var Cloudinary = mongoose.model('Cloudinary', cloudinarySchema);
var _default = exports["default"] = Cloudinary;