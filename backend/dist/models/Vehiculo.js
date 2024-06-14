"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var vehiculoSchema = new _mongoose.Schema({
  placa: {
    type: String,
    required: true,
    unique: true
  },
  tipo_de_combustible: {
    type: String,
    "enum": ['Gasolina', 'A.C.P.M'],
    required: true
  },
  clase_de_vehiculo: {
    type: String,
    "enum": ['VOLQUETA DTRQ', 'VOLQUETA', 'CARRO TANQUE', 'CAMION SENCILLO', 'TRACTOCAMION', 'CAMIONETA JEFES'],
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  propietario: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  documentos: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Documento'
  }],
  volquetas: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Volqueta'
  }],
  tractomulas: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Tractomula'
  }],
  tanqueos: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Tanqueo'
  }]
}, {
  timestamps: false,
  autoCreate: false
});
var _default = exports["default"] = (0, _mongoose.model)('Vehiculo', vehiculoSchema); // const mongoose = require("mongoose");
// const vehiculoSchema = new mongoose.Schema(
//   {
//     placa: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     tipo_de_combustible: {
//       type: String,
//       enum: ["Gasolina", "A.C.P.M"],
//       required: true,
//     },
//     clase_de_vehiculo: {
//       type: String,
//       enum: [
//         "VOLQUETA DTRQ",
//         "VOLQUETA",
//         "CARRO TANQUE",
//         "CAMION SENCILLO",
//         "TRACTOCAMION",
//         "CAMIONETA JEFES",
//       ],
//       required: true,
//     },
//     marca: {
//       type: String,
//       required: true,
//     },
//     color: String,
//     propietario: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Usuario",
//       required: true,
//     },
//     documentos: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Documento",
//       },
//     ],
//     volquetas: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Volqueta",
//       },
//     ],
//     tractomulas: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Tractomula",
//       },
//     ],
//     tanqueos: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Tanqueo",
//       },
//     ],
//   },
//   {
//     timestamps: false,
//     autoCreate: false,
//   }
// );
// module.exports = vehiculoSchema;