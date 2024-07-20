
import Tanqueo from '../models/Tanqueo';
import Persona from '../models/Persona';
import Vehiculo from '../models/Vehiculo';
import dotenv from 'dotenv';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

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
    folder: 'uploads',
    format: async (req, file) => 'jpg',
    public_id: (req, file) =>
      file.originalname.split('.')[0],
  },
});
// esta funcion de parser se encarga de subir las imagenes y se invoca en routes
export const parser = multer({ storage: storage }).single(
  'file',
);

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
    if (!req.file) {
      return res.status(400).json({
        message: 'No se ha proporcionado ninguna imagen',
      });
    }

    // Obtiene la URL de la imagen cargada a Cloudinary
    const uploadedImageUrl = req.file.path;
    if (!persona) {
      return res
        .status(404)
        .json({ message: 'persona no encontrada' });
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
      imagen_url: uploadedImageUrl,
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
  // Obtiene la URL de la imagen cargada a Cloudinary
  const uploadedImageUrl = req.file.path;
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
    imagen_url: uploadedImageUrl
  };

  // Filtrar las propiedades no definidas
  Object.keys(updates).forEach(
    (key) =>
      updates[key] === undefined && delete updates[key],
  );

  try {
    const tanqueo = await Tanqueo.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true },
    );
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
