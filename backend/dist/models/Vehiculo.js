"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require('mongoose');
var vehiculoSchema = new mongoose.Schema({
  placa: {
    type: String,
    required: true,
    unique: true
  },
  tipo_de_combustible: {
    type: String,
    "enum": ['Gasolina', 'A.C.P.M'],
    required: true
  },
  clase_de_vehiculo: {
    type: String,
    "enum": ['VOLQUETA DTRQ', 'VOLQUETA', 'CARRO TANQUE', 'CAMION SENCILLO', 'TRACTOCAMION', 'CAMIONETA JEFES'],
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  color: String,
  propietario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Persona'
  },
  documentos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Documento'
  }],
  volquetas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Volqueta'
  }],
  cargaPesada: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CargaPesada'
  }],
  tanqueos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tanqueo'
  }]
}, {
  timestamps: false,
  autoCreate: false
});
var Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);
var _default = exports["default"] = Vehiculo;