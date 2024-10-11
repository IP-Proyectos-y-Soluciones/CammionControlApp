"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require("mongoose");
var documentoSchema = new mongoose.Schema({
  cerificado_N: {
    type: String,
    required: true,
    unique: true
  },
  tipo: {
    type: String,
    "enum": ["Poliza de seguro", "Soat", "tecnomecanica"],
    required: true
  },
  vehiculo_placa: {
    type: String,
    required: true,
    unique: true
  },
  fecha_expedicion: Date,
  fecha_vencimiento: Date,
  vehiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehiculo"
  },
  imagen_url: {
    type: String,
    required: true
  }
}, {
  timestamps: false,
  autoCreate: false
});
var Documento = mongoose.model("Documento", documentoSchema);
var _default = exports["default"] = Documento;