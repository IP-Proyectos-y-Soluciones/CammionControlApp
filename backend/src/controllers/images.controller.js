<<<<<<< HEAD
import Persona from '../models/Persona';
import Tanqueo from '../models/Tanqueo';
import Imagen from '../models/Imagen';

export const getRefuelingImageByDNIAndInvoice = async (req, res) => {
    try {
        const { cedula, recibo } = req.params;

        // Se busca al empleado por cedula...
        const employee = await Persona.findOne({ cedula });

        if (!employee) {
            return res
                .status(404)
                .json({ message: 'Empleado NO encontrado...!' });
        }

        // Se busca el tanqueo correspondiente al recibo del empleado...
        const refueling = await Tanqueo.findOne({
            conductor: employee._id,
            n_recibo: recibo,
        });

        // Se busca la imagen correspondiente al ID de tanqueo...
        const image = await Imagen.findOne({ refueling: refueling._id });

        if (!image)
            return res
                .status(404)
                .json({ message: 'Imagen no encontrada...!' });

        // Se configuran los encabezados de respuesta y se envia la imagen en binario...
        res.set('Content-Type', image.mimeType); // MimeType, por ejemplo, 'image/png'...
        res.send(image.image_data); // Enviar la imagen en formato binario...
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json(error);
        }
    }
=======
import Persona from "../models/Persona";
import Tanqueo from "../models/Tanqueo";
import Imagen from "../models/Imagen";

export const getRefuelingImageByDNIAndInvoice = async (req, res) => {
  try {
    const { cedula, recibo } = req.params;

    // Se busca al empleado por cedula...
    const employee = await Persona.findOne({ cedula });

    if (!employee) {
      return res.status(404).json({ message: "Empleado NO encontrado...!" });
    }

    // Se busca el tanqueo correspondiente al recibo del empleado...
    const refueling = await Tanqueo.findOne({
      conductor: employee._id,
      n_recibo: recibo,
    });

    // Se busca la imagen correspondiente al ID de tanqueo...
    const image = await Imagen.findOne({ refueling: refueling._id });

    if (!image)
      return res.status(404).json({ message: "Imagen no encontrada...!" });

    // Se configuran los encabezados de respuesta y se envia la imagen en binario...
    res.set("Content-Type", image.mimeType); // MimeType, por ejemplo, 'image/png'...
    res.send(image.image_data); // Enviar la imagen en formato binario...
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
>>>>>>> origin/Dianis2
};
