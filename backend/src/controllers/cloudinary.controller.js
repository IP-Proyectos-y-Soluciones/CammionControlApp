//quiero  implementar cloudinary en el backend con express y nodejs

import { parse } from 'dotenv';

import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';



// Configuración de Cloudinary
cloudinary.config({
  cloud_name: 'dpd4mxi0u',
  api_key: '382712356157546',
  api_secret: 'vZL7GxfXjebFlPUsnt3sdvEkOJA'
});

// Configuración de multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    format: async (req, file) => 'jpg',
    public_id: (req, file) => file.originalname.split('.')[0],
  },
});

  // Asegúrate de que 'file' coincida con el campo de tu formulario
 export const parser =  multer({ storage: storage }).single('file');
// console.log("aqui es el storage",storage);
console.log(storage)

// Función para manejar la respuesta
export const uploadImage = async (req, res) => {
    try {
      // Verifica si se recibió un archivo
      if (!req.file) {
        return res.status(400).json({ message: 'No se ha proporcionado ninguna imagen' });
      }
      
       
      // Imprime el archivo recibido
      console.log("Archivo recibido:", JSON.stringify(req.file, null, 2));
  
      // Obtiene la URL de la imagen cargada a Cloudinary
      const uploadedImageUrl = req.file.path;
      console.log("URL de imagen lista:", uploadedImageUrl);
  
      // Responde con la URL de la imagen
      return res.status(200).json({ url: uploadedImageUrl });
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      return res.status(500).json({ message: 'Error al subir la imagen', error: error.message });
    }
  };









