const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema(
  {
    usuario: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: String,
      enum: ['Admin', 'Empleado', 'Empresa'],
      required: true,
    },
    estado: {
      type: Boolean,
      default: false,
      required: true,
    },
    persona: {
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

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
