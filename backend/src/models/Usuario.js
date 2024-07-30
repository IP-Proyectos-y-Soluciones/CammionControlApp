const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema(
  {
    usuario: {
      type: String,
      required: true,
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
      type: String,
      enum: ['Activo', 'Inactivo', 'Bloqueado'],
      default: 'Activo',
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
