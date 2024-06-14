"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var tractomulaSchema = new _mongoose.Schema({
  fecha_inicio: {
    type: Date,
    "default": Date.now,
    required: true
  },
  fecha_final: {
    type: Date,
    "default": ''
  },
  ciudad_inicio: {
    type: String,
    required: true
  },
  ciudad_destino: {
    type: String,
    required: true
  },
  empresa: {
    type: String
  },
  valor_flete: {
    type: Number
  },
  anticipo: {
    type: Number
  },
  descripcion_de_gastos: {
    type: String
  },
  gastos: {
    type: Number
  },
  total_anticipos_fletesPagados: {
    type: Number
  },
  total_gastos: {
    type: Number
  },
  saldo: {
    type: Number
  }
}, {
  timestamps: false,
  autoCreate: false
});
var _default = exports["default"] = (0, _mongoose.model)('Tractomula', tractomulaSchema); // const mongoose = require("mongoose");
// const tractomulaSchema = new mongoose.Schema(
//   {
//     fecha_inicio: {
//       type: Date,
//       default: Date.now,
//       required: true,
//     },
//     fecha_final: {
//       type: Date,
//       default: "",
//     },
//     ciudad_inicio: {
//       type: String,
//       required: true,
//     },
//     ciudad_destino: {
//       type: String,
//       required: true,
//     },
//     empresa: String,
//     valor_flete: Number,
//     anticipo: Number,
//     descripcion_de_gastos: String,
//     gastos: Number,
//     total_anticipos_fletesPagados: Number,
//     total_gastos: Number,
//     saldo: Number,
//   },
//   {
//     timestamps: false,
//     autoCreate: false,
//   }
// );
// module.exports = tractomulaSchema;