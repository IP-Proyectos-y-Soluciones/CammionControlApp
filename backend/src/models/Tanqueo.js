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
    },
    conductor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "persona",
    },
  },
  {
    timestamps: false,
    autoCreate: false,
  }
);

module.exports = tanqueoSchema;
