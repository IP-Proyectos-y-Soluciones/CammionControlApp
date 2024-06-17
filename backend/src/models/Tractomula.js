const mongoose = require('mongoose');

const tractomulaSchema = new mongoose.Schema(
  {
    fecha_inicio: {
      type: Date,
      default: Date.now,
      required: true,
    },
    fecha_final: {
      type: Date,
      default: '',
    },
    placas: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vehiculo',
    },
    conductor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Persona',
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
    anticipo: Number,
    descripcion_de_gastos: String,
    gastos: Number,
    total_anticipos_fletesPagados: Number,
    total_gastos: Number,
    saldo: Number,
  },
  {
    timestamps: false,
    autoCreate: false,
  },
);

const Tractomula = mongoose.model(
  'Tractomula',
  tractomulaSchema,
);

export default Tractomula;
