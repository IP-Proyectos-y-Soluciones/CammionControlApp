"use strict";

var mongoose = require('mongoose');
var imageSchema = new mongoose.Schema({
  refueling: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tanqueo',
    required: true
  },
  image_data: {
    type: Buffer,
    required: true
  },
  mimeType: {
    type: String,
    // 'image/png', 'image/jpeg', etc.
    required: true
  }
});
var Imagen = mongoose.model('Imagen', imageSchema);
module.exports = Imagen;