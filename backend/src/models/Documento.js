import { model, Schema } from 'mongoose';

const documentoSchema = new Schema(
  {
    cerificado_N: {
      type: String,
      required: true,
      unique: true,
    },
    tipo: {
      type: String,
      enum: ['Poliza de seguro', 'Soat', 'tecnomecanica'],
      required: true,
    },
    fecha_expedicion: { type: Date },
    fecha_vencemiento: { type: Date },
    vehiculo: {
      type: Schema.Types.ObjectId,
      ref: 'Vehiculo',
      require: true,
    },
  },
  {
    timestamps: false,
    autoCreate: false,
  },
);

export default model('Documento', documentoSchema);

// const mongoose = require("mongoose");

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
