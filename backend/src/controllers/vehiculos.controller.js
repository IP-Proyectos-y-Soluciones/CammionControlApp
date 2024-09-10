import Vehiculo from '../models/Vehiculo';
import Persona from '../models/Persona';

// Crear un nuevo vehiculo
export const createVehiculo = async (req, res) => {
    const { placa, tipo_de_combustible, clase_de_vehiculo, marca, color } =
        req.body;
    const vehiculo = new Vehiculo({
        placa,
        tipo_de_combustible,
        clase_de_vehiculo,
        marca,
        color,
    });

    try {
        const newVehicle = new Vehiculo({
            placa,
            tipo_de_combustible,
            clase_de_vehiculo,
            marca,
            color,
        });

        const savedVehicle = await newVehicle.save();

        // await vehiculo.save();
        // res.status(201).json({
        //     message: 'Registro de vehiculo exitoso',
        //     data: vehiculo,
        // });

        res.status(201).json({
            message: 'Registro de vehiculo exitoso',
            savedVehicle,
        });
    } catch (error) {
        // res.status(400).json(error);
        console.log(error);
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json(error);
        }
    }
};

// Obtener todos los vehiculos
export const getAllVehiculos = async (req, res) => {
    try {
        const vehiculos = await Vehiculo.find();
        res.status(200).json(vehiculos);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Obtener vehiculo por ID
export const getVehiculoById = async (req, res) => {
    const { id } = req.params;

    try {
        const vehiculo = await Vehiculo.findById(id);
        if (!vehiculo) {
            return res.status(404).send('ID no encontrado');
        }
        res.status(200).json({
            message: 'Búsqueda por ID exitosa',
            data: vehiculo,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

// Obtener vehículo por placa...
export const getVehiculoByPlaca = async (req, res) => {
    const { placa } = req.params;

    try {
        const vehiculo = await Vehiculo.findOne({ placa: placa });

        if (!vehiculo) {
            return res.status(404).json({
                message: `El vehículo con placas: ${placa} no se encuentra o no está registrado...!`,
            });
        }

        return res
            .status(200)
            .json({ message: 'Vehículo encontrado:', vehiculo });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json(error);
        }
    }
};

// Asignar conductor a un vehículo determinado...
export const assignDriverToVehicle = async (req, res) => {
    const { cedula, placa } = req.body;

    try {
        const verifyDriver = await Persona.findOne({ cedula });
        const verifyVehicle = await Vehiculo.findOne({ placa });

        if (!verifyDriver || !verifyVehicle) {
            return res.status(404).json({
                message:
                    'Este conductor (o vehículo) no se encuentra(n) registrado(s)...!',
            });
        }

        const updateData = {
            persona_cedula: verifyDriver.cedula,
            propietario: verifyDriver._id,
        };
        const assignDriver = await Vehiculo.findOneAndUpdate(
            verifyVehicle._id,
            { $set: updateData },
            { new: true },
        );

        const updateDataDriver = { vehiculos: verifyVehicle._id };
        await Persona.findOneAndUpdate(
            verifyDriver._id,
            { $set: updateDataDriver },
            { new: true },
        );

        return res.status(201).json({
            message: 'Asignación de vehículo exitosa...!!!',
            assignDriver,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json(error);
        }
    }
};

// Actualizar un vehiculo por ID
export const updateVehiculo = async (req, res) => {
    const { id } = req.params;
    const {
        placa,
        tipo_de_combustible,
        clase_de_vehiculo,
        marca,
        color,
        propietario,
        documentos,
        volquetas,
        tanqueos,
    } = req.body;
    const updates = {
        placa,
        tipo_de_combustible,
        clase_de_vehiculo,
        marca,
        color,
        propietario,
        documentos,
        volquetas,
        tanqueos,
    };

    // Filtrar las propiedades no definidas
    Object.keys(updates).forEach(
        (key) => updates[key] === undefined && delete updates[key],
    );

    try {
        const vehiculo = await Vehiculo.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        });
        if (!vehiculo) {
            return res
                .status(404)
                .send('No se pudo encontrar el ID para actualizar');
        }
        res.status(200).json({
            message: 'Actualizado exitosamente',
            data: vehiculo,
        });
    } catch (error) {
        res.status(400).json(error);
    }
};

// Eliminar un vehiculo por ID
export const deleteVehiculo = async (req, res) => {
    const { id } = req.params;

    try {
        const vehiculo = await Vehiculo.findByIdAndDelete(id);
        if (!vehiculo) {
            return res
                .status(404)
                .send('No se pudo encontrar el ID del vehiculo');
        }
        res.status(200).json({
            message: id + ' se ha eliminado exitosamente',
            data: vehiculo,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};
