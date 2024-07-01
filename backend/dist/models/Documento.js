"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// const mongoose = require('mongoose');

var documentoSchema = new _mongoose["default"].Schema({
  cerificado_N: {
    type: String,
    required: true,
    unique: true
  },
  tipo: {
    type: String,
    "enum": ['Poliza de seguro', 'Soat', 'tecnomecanica'],
    required: true
  },
  fecha_expedicion: Date,
  fecha_vencemiento: Date,
  vehiculo: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Vehiculo'
  }
}, {
  timestamps: false,
  autoCreate: false
});
var Documento = _mongoose["default"].model('Documento', documentoSchema);
var _default = exports["default"] = Documento;