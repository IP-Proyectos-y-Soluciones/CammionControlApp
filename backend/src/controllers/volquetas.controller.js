import Volqueta from '../models/Volqueta';
import Persona from '../models/Persona';
import Vehiculo from '../models/Vehiculo';
import { volquetaTemplate } from '../others/plantilla_volquetas';
import { generarNumeroPlanilla } from '../libs/GenRandomControlNumb'; ////////
import { DateTime } from 'luxon';

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

        let totalHours = 0;
        let startH;
        let endH;

        if (hora_inicio && hora_final) {
            // Se parsea las horas recibidas usando 'Luxon' y ajustamos a la zona horaria de Colombia...
            const start = DateTime.fromISO(hora_inicio, {
                zone: 'America/Bogota',
            });
            const end = DateTime.fromISO(hora_final, {
                zone: 'America/Bogota',
            });

            // Se asignan las horas ajustadas a la zona horaria local (sin conversión a UTC)...
            startH = start.toISO();
            endH = end.toISO();

            // Se Se calcula la diferencia total en milisegundos...
            const differenceMSecs = end.diff(start).as('milliseconds');

            // Se convierte la diferencia en horas completas con decimales...
            const totalHoursWithDecimals = differenceMSecs / (1000 * 60 * 60);

            totalHours = parseFloat(totalHoursWithDecimals.toFixed(2));
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
            total_horas: totalHours,
            km_inicial,
            km_final,
            total_km_dia,
            lugar_de_cargue,
            lugar_de_descargue,
            observacion,
        });

        const newVolqueta = await volquetaData.save();

        await volquetaTemplate(newVolqueta);

        await Persona.findOneAndUpdate(
            driver._id,
            { $push: { volquetas: newVolqueta._id } },
            { new: true },
        );
        //
        await Vehiculo.findOneAndUpdate(
            vehicle._id,
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
        const { id } = req.params;
        const { n_planilla, conductor_cedula } = req.body;

        let query = {};
        //
        if (id) {
            query._id = id;
        } else if (n_planilla) {
            query.n_planilla = n_planilla;
        } else if (conductor_cedula) {
            query.conductor_cedula = conductor_cedula;
        } else {
            return res.status(400).json({
                message:
                    'Debe proporcionar _id, n_planilla o conductor_cedula para actualizar.',
            });
        }

        const findPlanilla = await Volqueta.findOne(query);

        if (!findPlanilla)
            return res
                .status(404)
                .json({ message: 'Planilla de volqueta NO encontrada...!' });

        // Obtener los datos que se van a actualizar del cuerpo de la solicitud (req.body)
        const updateData = { ...req.body };

        // Evitar modificar el parámetro de búsqueda (si es necesario)...
        delete updateData._id;
        delete updateData.n_planilla;
        delete updateData.conductor_cedula;

        const updatedVolqueta = await Volqueta.findOneAndUpdate(
            query,
            updateData,
            {
                new: true,
                runValidators: true, // Para validar los datos antes de actualizar...
            },
        );

        if (!updatedVolqueta) {
            return res.status(404).json({
                message:
                    'Volqueta no encontrada con los parámetros proporcionados.',
            });
        }

        return res.status(200).json({
            message: 'Volqueta actualizada exitosamente...!!!',
            data: updatedVolqueta,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error actualizando la volqueta...!',
            error: error.message,
        });
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
