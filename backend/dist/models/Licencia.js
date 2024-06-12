"use strict";

var mongoose = require("mongoose");
var licenciaSchema = new mongoose.Schema({
  conductor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
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
  clase_de_vehiculo: String,
  servicio: String,
  fecha_expedicion: Date,
  fecha_vencemiento: Date
}, {
  timestamps: false,
  autoCreate: false
});
module.exports = licenciaSchema;