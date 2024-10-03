import Licencia from "../models/Licencia";
import Persona from "../models/Persona";
import dotenv from "dotenv";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

dotenv.config();

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Configuración de multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    format: async (req, file) => "jpg",
    public_id: (req, file) => file.originalname.split(".")[0],
  },
});

// esta funcion de parser se encarga de subir las imagenes y se invoca en routes
export const parser = multer({ storage: storage }).single("file");

export const createLicencia = async (req, res) => {
  try {
    const {
      conductor_cedula,
      licencia_N,
      categoria,
      clase_de_vehiculo,
      servicio,
      fecha_expedicion,
      fecha_vencimiento,
    } = req.body;

    const driver = await Persona.findOne({ cedula: conductor_cedula });

    if (!driver) {
      return res.status(404).json({
        message: `El conductor con cédula: ${conductor_cedula} no se encuentra registrado...!`,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "No se ha proporcionado ninguna imagen",
      });
    }

    // Obtiene la URL de la imagen cargada a Cloudinary
    const uploadedImageUrl = req.file.path;

    const newLicencia = new Licencia({
      conductor: driver._id,
      conductor_cedula,
      licencia_N,
      categoria,
      clase_de_vehiculo,
      servicio,
      fecha_expedicion,
      fecha_vencimiento,
      imagen_url: uploadedImageUrl,
    });

    const savedLicencia = await newLicencia.save();

    const updateDataDriver = { licencias: savedLicencia._id };
    await Persona.findOneAndUpdate(
      driver._id,
      { $set: updateDataDriver },
      { new: true }
    );

    res.status(201).json({
      message: "Licencia creada exitosamente...!!!",
      savedLicencia,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

export const getLicencia = async (req, res) => {
  try {
    const { licencia_N, clase_de_vehiculo } = req.query;
    const query = {};

    if (licencia_N) query.licencia_N = licencia_N;
    if (clase_de_vehiculo) query.clase_de_vehiculo = clase_de_vehiculo;

    const licencias = await Licencia.find(query).populate("conductor");

    if (licencias.length === 0) {
      return res.status(404).json({ message: "Licencia no encontrada" });
    }

    console.log(licencias);
    res.status(200).json({
      message: "Licencia encontrada",
      licencias,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las licencias",
      error: error.message,
    });
  }
};
export const putLicencia = async (req, res) => {
  try {
    const {
      conductor,
      licencia_N,
      categoria,
      clase_de_vehiculo,
      servicio,
      fecha_expedicion,
      fecha_vencimiento,
    } = req.body;

    const persona = await Persona.findById(conductor);
    if (!persona) {
      return res.status(404).json({ message: "El id del persona no existe" });
    }

    const licencia = await Licencia.findByIdAndUpdate(
      req.params.id,
      {
        conductor,
        licencia_N,
        categoria,
        clase_de_vehiculo,
        servicio,
        fecha_expedicion,
        fecha_vencimiento,
      },
      { new: true, runValidators: true }
    );

    if (!licencia) {
      return res.status(404).json({ message: "Licencia no fue encontrada" });
    }

    res.status(200).json({
      message: "La licencia ha sido actualizada correctamente!",
      licencia,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar la licencia",
      error: error.message,
    });
  }
};

export const deleteLicencia = async (req, res) => {
  try {
    const licencia = await Licencia.findByIdAndDelete(req.params.id);
    if (!licencia) {
      return res.status(404).json({ message: "Licencia no encontrada" });
    }
    res.status(200).json({
      message: "La licencia ha sido eliminada correctamente!",
      licencia,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
