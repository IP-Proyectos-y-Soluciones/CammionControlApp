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
    placa_vehiculo: {
      type: String,
      required: true,
    },
    placa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehiculo",
    },
    conductor_cedula: {
      type: Number,
      required: true,
    },
    conductor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Persona",
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
      enum: [
        "Arena",
        "Grava",
        "Tierra",
        "Piedra",
        "Escombros",
        "Concreto",
        "Asfalto",
        "Roca triturada",
        "Ripio",
        "Minerales (por ejemplo, carbón o cobre)",
        "Basura (en proyectos de demolición o limpieza)",
        "Material orgánico (en proyectos de paisajismo, como tierra vegetal)",
        "Otro",
      ],
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
    total_horas: {
      type: Number,
    },
    km_inicial: {
      type: String,
      required: true,
    },
    km_final: {
      type: String,
      required: true,
    },
    total_km_dia: String,
    honorarios: Number,
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
