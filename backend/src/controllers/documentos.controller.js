import Documento from '../models/Documento';
import Vehiculo from '../models/Vehiculo';

export const createDocumento = async (req, res) => {
    try {
        // const {
        //     cerificado_N,
        //     tipo,
        //     fecha_expedicion,
        //     fecha_vencimiento,
        //     vehiculo,
        // } = req.body;
        const {
            cerificado_N,
            tipo,
            vehiculo_placa,
            fecha_expedicion,
            fecha_vencimiento,
        } = req.body;
        // const vehiculoId = await Vehiculo.findById(vehiculo);
        const vehiculo = await Vehiculo.findOne({ placa: vehiculo_placa });

        console.log('ID del vehículo: ', vehiculo._id); ///////////

        if (!vehiculo) {
            return res.status(404).json({
                message: 'El id del vehiculo no existe',
            });
        }

        const newDocumento = new Documento({
            cerificado_N,
            tipo,
            vehiculo_placa,
            fecha_expedicion,
            fecha_vencimiento,
            vehiculo: vehiculo._id,
        });

        // await newDocumento.save();
        const newDocumentAssigned = await newDocumento.save();
        console.log('ID del documento creado: ', newDocumentAssigned._id); //////////
        await Vehiculo.findOneAndUpdate(
            vehiculo._id,
            { $set: { documentos: newDocumentAssigned._id } },
            { new: true },
        );

        // res.status(201).json({
        //     message: 'El documento  ha sido guardado correctamente!',
        //     newDocumento,
        // });
        res.status(201).json({
            message: 'El documento  ha sido guardado correctamente!',
            newDocumentAssigned,
        });
    } catch (error) {
        // res.status(500).json(error);
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json(error);
        }
    }
};

export const getAllDocumento = async (req, res) => {
    try {
        const { cerificado_N, tipo } = req.query;
        const query = {};
        if (cerificado_N) query.cerificado_N = cerificado_N;
        if (tipo) query.tipo = tipo;
        const documento = await Documento.find(query).populate('vehiculo');
        if (documento.length === 0) {
            return res.status(404).json({ message: 'Documento no encontrado' });
        }
        res.status(200).json({
            message: 'Documento encontrado',
            documento,
        });
    } catch (error) {
        0;
    }
};

export const putDocumento = async (req, res) => {
    try {
        const {
            cerificado_N,
            tipo,
            fecha_expedicion,
            fecha_vencimiento,
            vehiculo,
        } = req.body;
        const vehiculoId = await Vehiculo.findById(vehiculo);
        if (!vehiculoId) {
            return res.status(404).json({
                message: 'El id del vehiculo no existe',
            });
        }
        const documento = await Documento.findByIdAndUpdate(
            req.params.id,
            {
                cerificado_N,
                tipo,
                fecha_expedicion,
                fecha_vencimiento,
                vehiculo,
            },
            { new: true, runValidators: true },
        );
        if (!documento) {
            return res.status(404).json({ message: 'Documento no encontrado' });
        }
        res.status(200).json(documento);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteDocumento = async (req, res) => {
    try {
        const documento = await Documento.findByIdAndDelete(req.params.id);
        if (!documento) {
            return res.status(404).json({ message: 'Documento no encontrado' });
        }
        res.status(200).json(documento);
    } catch (error) {
        res.status(500).json(error);
    }
};
