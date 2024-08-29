"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require('mongoose');
var usuarioSchema = new mongoose.Schema({
  usuario_cedula: {
    type: Number,
    "default": 20,
    required: true,
    unique: true
  },
  usuario: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: String,
    "enum": ['Owner', 'Admin', 'Empleado', 'Empresa'],
    required: true
  },
  estado: {
    type: String,
    "enum": ['Activo', 'Inactivo', 'Bloqueado'],
    "default": 'Activo'
  },
  logged: {
    type: Boolean,
    "default": false
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