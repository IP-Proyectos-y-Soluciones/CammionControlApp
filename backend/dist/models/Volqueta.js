"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require("mongoose");
var volquetaSchema = new mongoose.Schema({
  n_planilla: {
    type: String,
    required: true,
    unique: true
  },
  fecha: {
    type: Date,
    "default": Date.now
  },
  placas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehiculo"
  },
  conductor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Persona"
  },
  cliente: {
    type: String,
    required: true
  },
  volmts3: {
    type: String,
    required: true
  },
  n_viajes: {
    type: Number,
    required: true
  },
  material: {
    type: String,
    required: true
  },
  hora_inicio: {
    type: Date,
    "default": Date.now,
    required: true
  },
  hora_final: {
    type: Date,
    "default": ""
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
  lugar_de_cargue: String,
  lugar_de_descargue: String,
  observacion: String
}, {
  timestamps: false,
  autoCreate: false
});
var Volqueta = mongoose.model("Volqueta", volquetaSchema);
var _default = exports["default"] = Volqueta;