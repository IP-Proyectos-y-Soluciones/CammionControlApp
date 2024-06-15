"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require('mongoose');
var volquetaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    "default": Date.now
  },
  placas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehiculo'
  },
  conductor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Persona'
  },
  volmts3: {
    type: String,
    required: true
  },
  n_viajes: {
    type: Number,
    required: true
  },
  hora_inicio: {
    type: Date,
    "default": Date.now,
    required: true
  },
  hora_final: {
    type: Date,
    "default": ''
  },
  honorario_inicial: {
    type: Number
  },
  honorario_final: {
    type: Number
  },
  total_horas: Number,
  km_inicial: {
    type: String,
    required: true
  },
  km_final: {
    type: String,
    required: true
  },
  total_km_dia: String,
  corte_de_cargue: String,
  corte_de_descargue: String,
  duracion: String
}, {
  timestamps: false,
  autoCreate: false
});
var Volqueta = mongoose.model('Volqueta', volquetaSchema);
var _default = exports["default"] = Volqueta;