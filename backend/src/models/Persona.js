const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema(
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
        fecha_inicio_contrato: {
            type: Date,
            required: true,
        },
        fecha_final_contrato: {
            type: Date,
        },
        tipo_de_contrato: {
            type: String,
            enum: ['Fijo', 'Indefinido'],
            required: true,
        },
        Usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuario',
        },
        licencias: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Licencia',
            },
        ],
        vehiculos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Vehiculo',
            },
        ],
        volquetas: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Volqueta',
            },
        ],
        tanqueos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tanqueo',
            },
        ],
    },
    {
        timestamps: true,
        autoCreate: true,
    },
);

const Persona = mongoose.model('Persona', personaSchema);

export default Persona;
