const mongoose = require("mongoose");

const cargaPesadaSchema = new mongoose.Schema(
  {
    fecha_inicio: {
      type: Date,
      default: Date.now,
      required: true,
    },
    fecha_final: {
      type: Date,
      default: "",
    },
    placas: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehiculo",
    },
    conductor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Persona",
    },
    ciudad_inicio: {
      type: String,
      required: true,
    },
    ciudad_destino: {
      type: String,
      required: true,
    },
    empresa: String,
    valor_flete: Number,
    anticipo_empresa: Number,
    anticipo_cliente: Number,
    descripcion_de_gastos: String,
    gastos: Number,
    total_anticipos_fletesPagados: Number,
    total_gastos: Number,
  },
  {
    timestamps: false,
    autoCreate: false,
  }
);

const cargaPesada = mongoose.model("CargaPesada", cargaPesadaSchema);

export default cargaPesada;
