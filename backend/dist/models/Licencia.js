"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require('mongoose');
var licenciaSchema = new mongoose.Schema({
  conductor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Persona'
  },
  conductor_cedula: {
    type: Number,
    required: true
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
  clase_de_vehiculo: {
    type: String
  },
  servicio: {
    type: String
  },
  fecha_expedicion: {
    type: Date,
    required: true
  },
  fecha_vencimiento: {
    type: Date,
    required: true
  }
}, {
  timestamps: false,
  autoCreate: false
});
var Licencia = mongoose.model('Licencia', licenciaSchema);
var _default = exports["default"] = Licencia;