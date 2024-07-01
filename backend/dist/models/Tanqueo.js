"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require('mongoose');
var tanqueoSchema = new mongoose.Schema({
  fecha_tanqueo: {
    type: Date,
    "default": Date.now,
    required: true
  },
  n_recibo: {
    type: String,
    required: true
  },
  estacion: {
    type: String,
    required: true
  },
  cantidad_galones: String,
  valor_tanqueo: Number,
  vehiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehiculo',
    required: true
  },
  conductor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Persona',
    required: true
  }
}, {
  timestamps: false,
  autoCreate: false
});
var Tanqueo = mongoose.model('Tanqueo', tanqueoSchema);
var _default = exports["default"] = Tanqueo;