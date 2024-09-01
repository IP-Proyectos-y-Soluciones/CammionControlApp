import Mecanico from '../models/Mecanico';

// Crear un nuevo mecanico
export const createMecanico = async (req, res) => {
    const {
        placas,
        fecha_de_revision,
        kilometraje,
        nombre_mecanico,
        celular,
        area_de_revision,
        fecha_entrega,
        descripcion_revicion,
    } = req.body;
    const mecanico = new Mecanico({
        placas,
        fecha_de_revision,
        kilometraje,
        nombre_mecanico,
        celular,
        area_de_revision,
        fecha_entrega,
        descripcion_revicion,
    });

    try {
        await mecanico.save();
        res.status(201).json({
            message: 'registro de mecanico exitoso',
            data: mecanico,
        });
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getAllMecanicos = async (req, res) => {
    try {
        const mecanicos = await Mecanico.find();
        res.status(200).json(mecanicos);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getMecanicoById = async (req, res) => {
    const { id } = req.params;

    try {
        const mecanico = await Mecanico.findById(id);
        if (!mecanico) {
            return res.status(404).send('id no encontrado');
        }
        res.status(200).json({
            message: 'búsqueda por id exitosa',
            data: mecanico,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateMecanico = async (req, res) => {
    const { id } = req.params;
    const {
        placas,
        fecha_de_revision,
        kilometraje,
        nombre_mecanico,
        celular,
        area_de_revision,
        fecha_entrega,
        descripcion_revicion,
    } = req.body;
    const updates = {
        placas,
        fecha_de_revision,
        kilometraje,
        nombre_mecanico,
        celular,
        area_de_revision,
        fecha_entrega,
        descripcion_revicion,
    };

    // Filtrar las propiedades no definidas
    Object.keys(updates).forEach(
        (key) => updates[key] === undefined && delete updates[key],
    );

    try {
        const mecanico = await Mecanico.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        });
        if (!mecanico) {
            return res
                .status(404)
                .send('no se pudo encontrar el id para actualizar');
        }
        res.status(200).json({
            message: 'Actualizado exitosamente',
            data: mecanico,
        });
    } catch (error) {
        res.status(400).json(error);
    }
};

// Eliminar un mecanico por ID
export const deleteMecanico = async (req, res) => {
    const { id } = req.params;

    try {
        const mecanico = await Mecanico.findByIdAndDelete(id);
        if (!mecanico) {
            return res
                .status(404)
                .send('no se pudo encontrar el id de mecanico');
        }
        res.status(200).json({
            message: id + ' se ha eliminado exitosamente',
            data: mecanico,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};
