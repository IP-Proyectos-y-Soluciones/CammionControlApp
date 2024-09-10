"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require('mongoose');
var cargaPesadaSchema = new mongoose.Schema({
  n_planilla: {
    type: String,
    required: true,
    unique: true
  },
  vehiculo_placa: {
    type: String,
    required: true
  },
  fecha_inicio: {
    type: Date,
    "default": Date.now,
    required: true
  },
  fecha_final: {
    type: Date,
    "default": ''
  },
  placas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehiculo'
  },
  conductor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Persona'
  },
  ciudad_inicio: {
    type: String,
    required: true
  },
  ciudad_destino: {
    type: String,
    required: true
  },
  empresa: String,
  valor_flete: Number,
  anticipo_empresa: Number,
  anticipo_cliente: Number,
  acpm: Number,
  peaje: Number,
  mantenimiento: Number,
  mecanico: Number,
  otros: Number,
  total_anticipos_fletesPagados: Number,
  total_gastos: Number,
  total_saldo: Number
}, {
  timestamps: false,
  autoCreate: false
});
var CargaPesada = mongoose.model('CargaPesada', cargaPesadaSchema);
var _default = exports["default"] = CargaPesada;