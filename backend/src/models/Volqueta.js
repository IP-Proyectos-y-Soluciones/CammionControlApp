const mongoose = require("mongoose");

const volquetaSchema = new mongoose.Schema(
  {
    n_planilla: {
      type: String,
      required: true,
      unique: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
    placas: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehiculo",
      required: true,
    },
    conductor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Persona",
      required: true,
    },
    cliente: {
      type: String,
      required: true,
    },
    volmts3: {
      type: String,
      required: true,
    },
    n_viajes: {
      type: Number,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    hora_inicio: {
      type: Date,
      default: Date.now,
      required: true,
    },
    hora_final: {
      type: Date,
      default: "",
    },
    total_horas: Number,
    km_inicial: {
      type: String,
      required: true,
    },
    km_final: {
      type: String,
      required: true,
    },
    total_km_dia: String,
    lugar_de_cargue: String,
    lugar_de_descargue: String,
    observacion: String,
  },
  {
    timestamps: false,
    autoCreate: false,
  }
);

const Volqueta = mongoose.model("Volqueta", volquetaSchema);

export default Volqueta;
