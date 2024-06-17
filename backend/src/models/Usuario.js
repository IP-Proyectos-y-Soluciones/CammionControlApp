const mongoose = require("mongoose");

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
      enum: ["Admin", "Empleado", "Empresa"],
      required: true,
    },
    estado: {
      type: Boolean,
      default: false,
      required: true,
    },
    vehiculos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehiculo",
      },
    ],
    licencias: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Licencia",
      },
    ],
    volquetas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Volqueta",
      },
    ],
    tractomulas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tractomula",
      },
    ],
    tanqueos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tanqueo",
      },
    ],
  },
  {
    timestamps: false,
    autoCreate: false,
  }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;
