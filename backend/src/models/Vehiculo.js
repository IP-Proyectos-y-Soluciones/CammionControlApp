const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema(
    {
        placa: {
            type: String,
            required: true,
            unique: true,
        },
        tipo_de_combustible: {
            type: String,
            enum: ['Gasolina', 'A.C.P.M'],
            required: true,
        },
        clase_de_vehiculo: {
            type: String,
            enum: [
                'VOLQUETA DTRQ',
                'VOLQUETA',
                'CARRO TANQUE',
                'CAMION SENCILLO',
                'TRACTOCAMION',
                'CAMIONETA JEFES',
            ],
            required: true,
        },
        marca: {
            type: String,
            required: true,
        },
        color: String,
        propietario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Persona',
        },
        documentos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Documento',
            },
        ],
        volquetas: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Volqueta',
            },
        ],
        cargaPesada: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tractomula',
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
        timestamps: false,
        autoCreate: false,
    },
);

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);

export default Vehiculo;
