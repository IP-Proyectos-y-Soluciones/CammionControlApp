"use strict";

var mongoose = require("mongoose");
var usuarioSchema = new mongoose.Schema({
  cedula: {
    type: Number,
    "default": 20,
    required: true,
    unique: true
  },
  nombres: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  celular: {
    type: String,
    "default": ""
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: String,
    "enum": ["Admin", "Empleado", "Empresa"],
    required: true
  },
  tipo_de_contrato: {
    type: String,
    "enum": ["Fijo", "Indefinido"],
    "default": "Fijo"
  },
  fecha_contrato: {
    type: Date,
    "default": Date.now
  },
  estado: {
    type: Boolean,
    "default": false,
    required: true
  },
  vehiculos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehiculo"
  }],
  licencias: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Licencia"
  }],
  volquetas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Volqueta"
  }],
  tractomulas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tractomula"
  }],
  tanqueos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tanqueo"
  }]
}, {
  timestamps: false,
  autoCreate: false
});
module.exports = usuarioSchema;