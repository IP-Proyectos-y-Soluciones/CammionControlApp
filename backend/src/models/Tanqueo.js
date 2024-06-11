const mongoose = require("mongoose");

const tanqueoSchema = new mongoose.Schema(
  {
    fecha_tanqueo: {
      type: Date,
      default: Date.now,
      required: true,
    },
    estacion: {
      type: String,
      required: true,
    },
    cantidad_galones: String,
    valor_tanqueo: Number,
    vehiculo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehiculo",
      required: true,
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
  },
  {
    timestamps: false,
    autoCreate: false,
  }
);

module.exports = tanqueoSchema;
