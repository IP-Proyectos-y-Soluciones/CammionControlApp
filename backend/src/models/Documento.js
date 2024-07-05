const mongoose = require("mongoose");

const documentoSchema = new mongoose.Schema(
  {
    cerificado_N: {
      type: String,
      required: true,
      unique: true,
    },
    tipo: {
      type: String,
      enum: ["Poliza de seguro", "Soat", "tecnomecanica"],
      required: true,
    },
    fecha_expedicion: Date,
    fecha_vencemiento: Date,
    vehiculo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehiculo",
    },
  },
  {
    timestamps: false,
    autoCreate: false,
  }
);

const Documento = mongoose.model("Documento", documentoSchema);

export default Documento;
