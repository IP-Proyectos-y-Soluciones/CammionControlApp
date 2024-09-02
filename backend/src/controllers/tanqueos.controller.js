// importar los modelos con importimport
import Tanqueo from '../models/Tanqueo';
import Persona from '../models/Persona';
import Vehiculo from '../models/Vehiculo';

// Crear un nuevo tanqueo
export const createTanqueo = async (req, res) => {
    const {
        fecha_tanqueo,
        n_recibo,
        estacion,
        cantidad_galones,
        valor_tanqueo,
        vehiculo,
        conductor,
    } = req.body;

    try {
        const persona = await Persona.findById(conductor);

        if (!persona) {
            return res.status(404).json({ message: 'persona no encontrada' });
        }
        const vehiculoById = await Vehiculo.findById(vehiculo);
        if (!vehiculoById) {
            return res
                .status(404)
                .json({ message: 'no se encontro el vehículo' });
        }

        const tanqueo = new Tanqueo({
            fecha_tanqueo,
            n_recibo,
            estacion,
            cantidad_galones,
            valor_tanqueo,
            vehiculo: vehiculoById._id,
            conductor: persona._id,
        });
        await tanqueo.save();
        res.status(201).json({
            message: ' Tanqueo creado exitosamente',
            data: tanqueo,
        });
    } catch (error) {
        res.status(400).json(error);
    }
};

// Obtener todos los tanqueos
export const getAllTanqueos = async (req, res) => {
    try {
        const tanqueos = await Tanqueo.find();
        res.status(200).json({
            message: ' Tanqueo traidos exitosamente',
            data: tanqueos,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

// Obtener un tanqueo por ID
export const getTanqueoById = async (req, res) => {
    const { id } = req.params;

    try {
        const tanqueo = await Tanqueo.findById(id);
        if (!tanqueo) {
            return res.status(404).json();
        }
        res.status(200).json({
            message: ' Tanqueo encontrado exitosamente',
            data: tanqueo,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

// Actualizar un tanqueo por ID
export const updateTanqueo = async (req, res) => {
    const { id } = req.params;
    const {
        fecha_tanqueo,
        n_recibo,
        estacion,
        cantidad_galones,
        valor_tanqueo,
        vehiculo,
        conductor,
    } = req.body;
    const updates = {
        fecha_tanqueo,
        n_recibo,
        estacion,
        cantidad_galones,
        valor_tanqueo,
        vehiculo,
        conductor,
    };

    // Filtrar las propiedades no definidas
    Object.keys(updates).forEach(
        (key) => updates[key] === undefined && delete updates[key],
    );

    try {
        const tanqueo = await Tanqueo.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        });
        if (!tanqueo) {
            return res.status(404).json();
        }
        res.status(200).json({
            message: ' Tanqueo actualizado exitosamente',
            data: tanqueo,
        });
    } catch (error) {
        res.status(400).json(error);
    }
};

// Eliminar un tanqueo por ID
export const deleteTanqueo = async (req, res) => {
    const { id } = req.params;

    try {
        const tanqueo = await Tanqueo.findByIdAndDelete(id);
        if (!tanqueo) {
            return res.status(404).send('id no encontrado');
        }
        res.status(200).json(id + ' eliminado con éxito');
    } catch (error) {
        res.status(500).json(error);
    }
};
