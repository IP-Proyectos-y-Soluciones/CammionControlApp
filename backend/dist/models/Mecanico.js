"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require('mongoose');
var mecanicoSchema = new mongoose.Schema({
  placas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehiculo',
    required: true
  },
  fecha_de_revision: {
    type: Date,
    "default": Date.now,
    required: true
  },
  kilometraje: {
    type: String,
    required: true
  },
  descripcion_revicion: String
}, {
  timestamps: false,
  autoCreate: false
});
var Mecanico = mongoose.model('Mecanico', mecanicoSchema);
var _default = exports["default"] = Mecanico;