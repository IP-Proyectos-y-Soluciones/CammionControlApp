"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var documentoSchema = new _mongoose.Schema({
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
  fecha_expedicion: {
    type: Date
  },
  fecha_vencemiento: {
    type: Date
  },
  vehiculo: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Vehiculo'
  }
}, {
  timestamps: false,
  autoCreate: false
});
var _default = exports["default"] = (0, _mongoose.model)('Documento', documentoSchema); // const mongoose = require("mongoose");
// const documentoSchema = new mongoose.Schema(
//   {
//     cerificado_N: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     tipo: {
//       type: String,
//       enum: ["Poliza de seguro", "Soat", "tecnomecanica"],
//       required: true,
//     },
//     fecha_expedicion: Date,
//     fecha_vencemiento: Date,
//     vehiculo: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Vehiculo",
//       required: true,
//     },
//   },
//   {
//     timestamps: false,
//     autoCreate: false,
//   }
// );
// module.exports = documentoSchema;