const mongoose = require("mongoose");

const PersonaSchema = new mongoose.Schema(
  {
    cedula: {
      type: Number,
      default: 20,
      required: true,
      unique: true,
    },
    nombres: {
      type: String,
      required: true,
    },
    apellidos: {
      type: String,
      required: true,
    },
    fecha_nacimiento: {
      type: Date,
      required: true,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    tipo_de_contrato: {
      type: String,
      enum: ["Fijo", "Indefinido"],
      required: true,
    },
    Usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
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
    timestamps: true,
    autoCreate: true,
  }
);
const Persona = mongoose.model("Persona", PersonaSchema);

export default Persona;
