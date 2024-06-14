import { model, Schema } from 'mongoose';

const licenciaSchema = new Schema(
  {
    conductor: {
      type: Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true,
    },
    licencia_N: {
      type: Number,
      required: true,
      unique: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    clase_de_vehiculo: { type: String },
    servicio: { type: String },
    fecha_expedicion: { type: Date },
    fecha_vencimiento: { type: Date },
  },
  {
    timestamps: false,
    autoCreate: false,
  },
);

export default model('Licencia', licenciaSchema);

// const mongoose = require("mongoose");

// const licenciaSchema = new mongoose.Schema(
//   {
//     conductor: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Usuario",
//       required: true,
//     },
//     licencia_N: {
//       type: Number,
//       required: true,
//       unique: true,
//     },
//     categoria: {
//       type: String,
//       required: true,
//     },
//     clase_de_vehiculo: String,
//     servicio: String,
//     fecha_expedicion: Date,
//     fecha_vencemiento: Date,
//   },
//   {
//     timestamps: false,
//     autoCreate: false,
//   }
// );

// module.exports = licenciaSchema;
