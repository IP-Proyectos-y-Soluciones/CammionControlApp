// Implementar cloudinary en el backend con express y nodejs

import dotenv from "dotenv";
import Cloudinary from "../models/Cloudinary";

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
console.log(multer);
export const parser = multer({ storage: storage }).single("file");

// Función para manejar la respuesta
export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No se ha proporcionado ninguna imagen",
      });
    }

    // Obtiene la URL de la imagen cargada a Cloudinary
    const uploadedImageUrl = req.file.path;
    const newImage = new Cloudinary({
      url: uploadedImageUrl,
    });
    await newImage.save();

    // Responde con la URL de la imagen
    return res.status(200).json({ url: uploadedImageUrl });
  } catch (error) {
    return res.status(500).json({
      message: "Error al subir la imagen",
      error: error.message,
    });
  }
};

// Controlador para obtener todas las imágenes
export const getImagesFromCloudinay = async (req, res) => {
  try {
    const images = await Cloudinary.find();
    return res.status(200).json({
      message: "búsqueda de imagenes exitosa",
      data: images,
    });
  } catch (error) {
    console.error("Error al obtener las imágenes:", error);
    return res.status(500).json({
      message: "Error al obtener las imágenes",
      error: error.message,
    });
  }
};
// Controlador para obtener una imagen por ID
export const getImageById = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Cloudinary.findById(id);

    if (!image) {
      return res.status(404).json({ message: "Imagen no encontrada" });
    }

    return res.status(200).json({
      message: "Búsqueda por ID exitosa",
      data: image,
    });
  } catch (error) {
    console.error("Error al obtener la imagen:", error);
    return res.status(500).json({
      message: "Error al obtener la imagen",
      error: error.message,
    });
  }
};
// Controlador para eliminar una imagen por ID
export const deleteImageById = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Cloudinary.findByIdAndDelete(id);

    if (!image) {
      return res.status(404).json({ message: "Imagen no encontrada" });
    }

    return res.status(200).json({ message: "Imagen eliminada exitosamente" });
  } catch (error) {
    console.error("Error al eliminar la imagen:", error);
    return res.status(500).json({
      message: "Error al eliminar la imagen",
      error: error.message,
    });
  }
};
// Controlador para actualizar una imagen por ID
export const updateImageById = async (req, res) => {
  const { id } = req.params;
  const { url } = req.body;

  try {
    const updatedImage = await Cloudinary.findByIdAndUpdate(id, url, {
      new: true,
    });

    if (!updatedImage) {
      return res.status(404).json({ message: "Imagen no encontrada" });
    }

    return res.status(200).json({
      message: "Imagen actualizada exitosamente",
      data: {
        url: url,
      },
    });
  } catch (error) {
    console.error("Error al actualizar la imagen:", error);
    return res.status(500).json({
      message: "Error al actualizar la imagen",
      error: error.message,
    });
  }
};
