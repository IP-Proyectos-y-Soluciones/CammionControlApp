"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require('mongoose');
var licenciaSchema = new mongoose.Schema({
  conductor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  licencia_N: {
    type: Number,
    required: true,
    unique: true
  },
  categoria: {
    type: String,
    required: true
  },
  clase_de_vehiculo: String,
  servicio: String,
  fecha_expedicion: Date,
  fecha_vencemiento: Date
}, {
  timestamps: false,
  autoCreate: false
});
var Licencia = mongoose.model('Licencia', licenciaSchema);
var _default = exports["default"] = Licencia;