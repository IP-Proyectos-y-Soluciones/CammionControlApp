import Volqueta from '../models/Volqueta';
import Persona from '../models/Persona';
import Vehiculo from '../models/Vehiculo';

export const createVolqueta = async (req, res) => {
    try {
        const {
            n_planilla,
            fecha,
            placa_vehiculo,
            cedula,
            cliente,
            volmts3,
            n_viajes,
            material,
            hora_inicio,
            hora_final,
            km_inicial,
            km_final,
            lugar_de_cargue,
            lugar_de_descargue,
            observacion,
        } = req.body;

        const driver = await Persona.findOne({ cedula: cedula });

        if (!driver) {
            return res.status(404).json({
                message: `El conductor con la cédula ${cedula} NO se encuentra registrado...!`,
            });
        }

        const vehicle = await Vehiculo.findOne({ placa: placa_vehiculo });

        if (!vehicle) {
            return res.status(404).json({
                message: `El vehículo con placa ${placa} NO se encuentra registrado...!`,
            });
        }

        let total_horas = 0;
        let startH;
        let endH;

        if (hora_inicio && hora_final) {
            const start = new Date(hora_inicio);
            const end = new Date(hora_final);
            //
            const timezoneOffset = new Date().getTimezoneOffset(); // Devuelve el offset en minutos...
            //
            startH = new Date(start.getTime() - timezoneOffset * 60000);
            endH = new Date(end.getTime() - timezoneOffset * 60000);

            total_horas = (endH - startH) / (1000 * 60 * 60);
        }

        const total_km_dia = km_final - km_inicial;

        const volquetaData = new Volqueta({
            n_planilla,
            fecha,
            placa_vehiculo,
            placa: vehicle._id,
            conductor_cedula: cedula,
            conductor: driver._id,
            cliente,
            volmts3,
            n_viajes,
            material,
            hora_inicio: startH,
            hora_final: endH,
            total_horas,
            km_inicial,
            km_final,
            total_km_dia,
            lugar_de_cargue,
            lugar_de_descargue,
            observacion,
        });

        const newVolqueta = await volquetaData.save();

        await Persona.findOneAndUpdate(
            driver._id,
            // { $set: updateDataDriver },
            { $push: { volquetas: newVolqueta._id } },
            { new: true },
        );
        //
        await Vehiculo.findOneAndUpdate(
            vehicle._id,
            // { $set: updateDataVehicle },
            { $push: { volquetas: newVolqueta._id } },
            { new: true },
        );

        return res.status(201).json({
            message: 'El formulario fue guardado correctamente!',
            newVolqueta,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json(error);
        }
    }
    // try {
    //     const {
    //         n_planilla,
    //         fecha,
    //         placas,
    //         conductor,
    //         cliente,
    //         volmts3,
    //         n_viajes,
    //         material,
    //         hora_inicio,
    //         hora_final,
    //         km_inicial,
    //         km_final,
    //         lugar_de_cargue,
    //         lugar_de_descargue,
    //         observacion,
    //     } = req.body;

    //     const persona = await Persona.findById(conductor);
    //     if (!persona) {
    //         return res.status(404).json({
    //             message: 'El id de la persona no existe',
    //         });
    //     }
    //     const vehiculo_id = await Vehiculo.findById(placas);
    //     if (!vehiculo_id) {
    //         return res.status(404).json({
    //             message: 'Las placas del vehiculo no existen',
    //         });
    //     }

    //     let total_horas = 0;
    //     if (hora_inicio && hora_final) {
    //         const start = new Date(hora_inicio);
    //         const end = new Date(hora_final);
    //         total_horas = (end - start) / (1000 * 60 * 60);
    //     }

    //     const total_km_dia = km_final - km_inicial;

    //     const newVolqueta = new Volqueta({
    //         n_planilla,
    //         fecha,
    //         placas,
    //         conductor,
    //         cliente,
    //         volmts3,
    //         n_viajes,
    //         material,
    //         hora_inicio,
    //         hora_final,
    //         total_horas,
    //         km_inicial,
    //         km_final,
    //         total_km_dia,
    //         lugar_de_cargue,
    //         lugar_de_descargue,
    //         observacion,
    //     });

    //     await newVolqueta.save();

    //     res.status(200).json({
    //         message: 'El formulario fue guardado correctamente!',
    //         newVolqueta,
    //     });
    // } catch (error) {
    //     res.status(500).json(error);
    // }
};

export const getAllVolquetasForms = async (req, res) => {
    try {
        const allVolquetasForm = await Volqueta.find();

        if (!allVolquetasForm) {
            return res.status(404).json({
                message:
                    'No existe ninguna planilla de volquetas registrada...!',
            });
        }

        return res.status(200).json(allVolquetasForm);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json(error);
        }
    }
};

export const getVolqueta = async (req, res) => {
    try {
        const { n_planilla, conductor_id, placas } = req.query;
        const query = {};

        if (n_planilla) query.n_planilla = n_planilla;
        if (conductor_id) query.conductor = conductor_id; // debe ser "conductor" en lugar de "conductor_id"
        if (placas) query.placas = placas;

        const planilla = await Volqueta.find(query)
            .populate('conductor')
            .populate('placas');

        if (planilla.length === 0) {
            return res.status(404).json({ message: 'Planilla no encontrada' });
        }

        res.status(200).json({
            message: 'Planilla encontrada',
            planilla,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener las planillas',
            error: error.message,
        });
    }
};

export const putVolqueta = async (req, res) => {
    try {
        const {
            n_planilla,
            fecha,
            placas,
            conductor,
            cliente,
            volmts3,
            n_viajes,
            material,
            hora_inicio,
            hora_final,
            km_inicial,
            km_final,
            lugar_de_cargue,
            lugar_de_descargue,
            observacion,
        } = req.body;

        const persona = await Persona.findById(conductor_id);
        if (!persona) {
            return res.status(404).json({
                message: 'El id de la persona no existe',
            });
        }
        const vehiculo_id = await Vehiculo.findById(placas);
        if (!vehiculo_id) {
            return res.status(404).json({
                message: 'Las placas del vehiculo no existen',
            });
        }
        let total_horas = 0;
        if (hora_inicio && hora_final) {
            const start = new Date(hora_inicio);
            const end = new Date(hora_final);
            total_horas = (end - start) / (1000 * 60 * 60);
        }

        const total_km_dia = km_final - km_inicial;

        const planilla = await Volqueta.findByIdAndUpdate(
            req.params.id,
            {
                n_planilla,
                fecha,
                placas,
                conductor,
                cliente,
                volmts3,
                n_viajes,
                material,
                hora_inicio,
                hora_final,
                total_horas,
                km_inicial,
                km_final,
                total_km_dia,
                lugar_de_cargue,
                lugar_de_descargue,
                observacion,
            },
            { new: true },
        );

        if (!planilla) {
            return res.status(404).json({
                message: 'Planilla no encontrada',
            });
        }

        res.status(200).json({
            message: 'El formulario fue actualizado correctamente!',
            planilla,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteVolqueta = async (req, res) => {
    try {
        const planilla = await Volqueta.findByIdAndDelete(req.params.id);
        if (!planilla) {
            return res.status(404).json({ message: 'Planilla no encontrada' });
        }
        res.status(200).json({
            message: 'La planilla ha sido eliminada correctamente!',
            planilla,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};
