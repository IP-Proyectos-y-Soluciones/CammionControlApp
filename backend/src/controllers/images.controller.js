import Imagen from '../models/Imagen';

export const getRefuelingImageByID = async (req, res) => {
    try {
        const { refuelingID } = req.params;

        // Se busca la imagen correspondiente al ID de tanqueo...
        const image = await Imagen.findOne({ refueling: refuelingID });

        if (!image)
            return res
                .status(404)
                .json({ message: 'Imagen no encontrada...!' });

        // se configuran los encabezados de respuesta...
        res.set('Content-Type', image.mimeType); // MimeType, por ejemplo, 'image/png'...
        res.send(image.image_data); // Enviar la imagen en formato binario...
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json(error);
        }
    }
};
