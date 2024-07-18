const mongoose = require('mongoose');

const tanqueoSchema = new mongoose.Schema(
  {
    fecha_tanqueo: {
      type: Date,
      default: Date.now,
      required: true,
    },
    n_recibo: {
      type: String,
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
      ref: 'Vehiculo',
      required: true,
    },
    conductor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Persona',
      required: true,
    },
  },
  {
    timestamps: false,
    autoCreate: false,
  },
);

const Tanqueo = mongoose.model('Tanqueo', tanqueoSchema);

export default Tanqueo;
