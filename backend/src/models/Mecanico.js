const mongoose = require('mongoose');

const mecanicoSchema = new mongoose.Schema(
  {
    placas: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vehiculo',
      required: true,
    },
    fecha_de_revision: {
      type: Date,
      default: Date.now,
      required: true,
    },
    kilometraje: {
      type: String,
      required: true,
    },
    descripcion_revicion: String,
  },
  {
    timestamps: false,
    autoCreate: false,
  },
);

const Mecanico = mongoose.model('Mecanico', mecanicoSchema);

export default Mecanico;
