import Vehiculo from '../models/Vehiculo';

// Crear un nuevo vehiculo
export const createVehiculo = async (req, res) => {
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
    const vehiculo = new Vehiculo({
        placa,
        tipo_de_combustible,
        clase_de_vehiculo,
        marca,
        color,
        propietario,
        documentos,
        volquetas,
        tanqueos,
    });

    try {
        await vehiculo.save();
        res.status(201).json({
            message: 'Registro de vehiculo exitoso',
            data: vehiculo,
        });
    } catch (error) {
        res.status(400).json(error);
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
