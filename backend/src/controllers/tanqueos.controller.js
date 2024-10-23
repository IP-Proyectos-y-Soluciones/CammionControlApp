// importar los modelos con import
import Tanqueo from "../models/Tanqueo";
import Persona from "../models/Persona";
import Vehiculo from "../models/Vehiculo";
import { findVehicleAndDriver } from "../libs/FindVehicleAndDriver";
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

// Crear un nuevo tanqueo
export const createTanqueo = async (req, res) => {
  try {
    const {
      fecha_tanqueo,
      n_recibo,
      estacion,
      km_al_tanqueo,
      cantidad_galones,
      valor_tanqueo,
      placas,
      cedula,
    } = req.body;

    const queryResult = await findVehicleAndDriver(placas, cedula);

    console.log(queryResult.found);

    if (!queryResult.found) {
      return res.status(404).json({ message: queryResult.message });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "No se ha proporcionado ninguna imagen",
      });
    }

    // Obtiene la URL de la imagen cargada a Cloudinary
    const uploadedImageUrl = req.file.path;

    const refuelingData = new Tanqueo({
      fecha_tanqueo,
      n_recibo,
      estacion,
      km_al_tanqueo,
      cantidad_galones,
      valor_tanqueo,
      vehiculo_placa: placas,
      vehiculo: queryResult.vehicleId,
      conductor_cedula: cedula,
      conductor: queryResult.driverId,
      imagen_url: uploadedImageUrl,
    });

    const newRefueling = await refuelingData.save();

    await Persona.findByIdAndUpdate(
      queryResult.driverId,
      { $push: { tanqueos: newRefueling._id } },
      { new: true }
    );

    await Vehiculo.findByIdAndUpdate(
      queryResult.vehicleId,
      { $push: { tanqueos: newRefueling._id } },
      { new: true }
    );

    return res.status(201).json({
      message: "El formulario se ha registrado correctamente...!",
      newRefueling,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

// Obtener todos los tanqueos
export const getAllTanqueos = async (req, res) => {
  try {
    const tanqueos = await Tanqueo.find();
    res.status(200).json({
      message: " Tanqueo traidos exitosamente",
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
      message: " Tanqueo encontrado exitosamente",
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
    km_al_tanqueo,
    cantidad_galones,
    valor_tanqueo,
    vehiculo,
    conductor,
  } = req.body;
  const updates = {
    fecha_tanqueo,
    n_recibo,
    estacion,
    km_al_tanqueo,
    cantidad_galones,
    valor_tanqueo,
    vehiculo,
    conductor,
  };

  // Filtrar las propiedades no definidas
  Object.keys(updates).forEach(
    (key) => updates[key] === undefined && delete updates[key]
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
      message: " Tanqueo actualizado exitosamente",
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
      return res.status(404).send("id no encontrado");
    }
    res.status(200).json(id + " eliminado con éxito");
  } catch (error) {
    res.status(500).json(error);
  }
};
