"use strict";

var mongoose = require('mongoose');
var imageHeavyLoadSchema = new mongoose.Schema({
  heavyload: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CargaPesada',
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
var HeavyLoadImage = mongoose.model('HeavyLoadImage', imageHeavyLoadSchema);
module.exports = HeavyLoadImage;