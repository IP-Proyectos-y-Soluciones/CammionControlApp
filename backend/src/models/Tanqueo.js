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
        cantidad_galones: { type: String },
        valor_tanqueo: { type: Number },
        vehiculo_placa: { type: String, required: true },
        vehiculo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vehiculo',
            required: true,
        },
        conductor_cedula: { type: Number, required: true },
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
