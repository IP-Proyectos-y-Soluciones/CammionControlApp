const mongoose = require('mongoose');

const licenciaSchema = new mongoose.Schema(
    {
        conductor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuario',
        },
        licencia_N: {
            type: Number,
            required: true,
            unique: true,
        },
        categoria: {
            type: String,
            required: true,
        },
        clase_de_vehiculo: String,
        servicio: String,
        fecha_expedicion: {
            type: Date,
            require: true,
        },
        fecha_vencimiento: {
            type: Date,
            require: true,
        },
    },
    {
        timestamps: false,
        autoCreate: false,
    },
);

const Licencia = mongoose.model('Licencia', licenciaSchema);

export default Licencia;
