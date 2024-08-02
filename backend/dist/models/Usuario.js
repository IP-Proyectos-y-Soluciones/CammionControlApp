"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require('mongoose');
var usuarioSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: String,
    "enum": ['Admin', 'Empleado', 'Empresa'],
    required: true
  },
  estado: {
    type: String,
    "enum": ['Activo', 'Inactivo', 'Bloqueado'],
    "default": 'Activo'
  },
  intentosFallidos: {
    type: Number,
    "default": 0
  },
  ultimoIntento: {
    type: Date
  },
  persona: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Persona',
    required: true
  }
}, {
  timestamps: false,
  autoCreate: false
});
var Usuario = mongoose.model('Usuario', usuarioSchema);
var _default = exports["default"] = Usuario;