"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var tanqueoSchema = new _mongoose.Schema({
  fecha_tanqueo: {
    type: Date,
    "default": Date.now,
    required: true
  },
  estacion: {
    type: String,
    required: true
  },
  cantidad_galones: {
    Number: Number
  },
  valor_tanqueo: {
    Number: Number
  },
  vehiculo: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Vehiculo',
    required: true
  },
  usuario: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  }
}, {
  timestamps: false,
  autoCreate: false
});
var _default = exports["default"] = (0, _mongoose.model)('Tanqueo', tanqueoSchema); // const mongoose = require("mongoose");
// const tanqueoSchema = new mongoose.Schema(
//   {
//     fecha_tanqueo: {
//       type: Date,
//       default: Date.now,
//       required: true,
//     },
//     estacion: {
//       type: String,
//       required: true,
//     },
//     cantidad_galones: String,
//     valor_tanqueo: Number,
//     vehiculo: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Vehiculo",
//       required: true,
//     },
//     usuario: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Usuario",
//       required: true,
//     },
//   },
//   {
//     timestamps: false,
//     autoCreate: false,
//   }
// );
// module.exports = tanqueoSchema;