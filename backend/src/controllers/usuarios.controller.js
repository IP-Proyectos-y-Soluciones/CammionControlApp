import Usuario from '../models/Usuario';
import Persona from '../models/Persona';
import { encrypted } from '../authentication/passwords/encrypted';

export const registrarUsuario = async (req, res) => {
  const {
    usuario_cedula,
    usuario,
    password,
    roles,
    estado,
    logged,
  } = req.body;

  try {
    // Verifica si la persona existe
    const persona = await Persona.findOne({
      cedula: usuario_cedula,
    });

    if (!persona) {
      return res.status(404).json({
        message:
          'Persona no encontrada. No se puede crear el usuario sin una persona válida.',
      });
    }

    // Encriptación del password...
    const passwordEncrypted = await encrypted(password);

    // Crea un nuevo usuario con la referencia a la persona existente
    const newUsuario = new Usuario({
      usuario_cedula,
      usuario,
      password: passwordEncrypted,
      roles,
      estado,
      logged,
      persona: persona._id,
    });

    const savedUsuario = await newUsuario.save();

    return res.status(201).json({
      message:
        'El nuevo usuario ha sido creado exitosamente...!',
      savedUsuario,
    });
  } catch (error) {
    // if (error instanceof Error) {
    //   return res.status(500).json({ error: error.message });
    // } else {
    return res.status(500).json(error);
    // }
  }
};

export const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();

    if (!usuarios)
      return res.status(404).json({
        message: 'No se ha encontrado ningún usuario...',
      });

    return res.status(200).json(usuarios);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

export const getUsuario = async (req, res) => {
  try {
    const { usuario } = req.params;

    const findUsuario = await Usuario.findOne({
      usuario: usuario,
    });

    if (!findUsuario)
      return res
        .status(404)
        .json({ message: 'Usuario no encontrado...!' });

    return res.status(200).json(findUsuario);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { _id } = req.params;
    const { usuario, newPassword, roles, estado } =
      req.body;

    const findUsuario = await Usuario.findById(_id);

    if (!findUsuario)
      return res
        .status(404)
        .json({ message: 'Usuario no encontrado...!' });

    // Se crea un objeto con los campos a actualizar...
    const updatedFields = {};

    if (usuario !== undefined)
      updatedFields.usuario = usuario;
    if (roles !== undefined) updatedFields.roles = roles;
    if (estado !== undefined) updatedFields.estado = estado;

    // Si se proporciona un nuevo password, se encripta...
    if (newPassword !== undefined) {
      updatedFields.password = await encrypted(newPassword);
    }

    // Se actualiza el usuario en la BD...
    const updatedUsuario = await Usuario.findByIdAndUpdate(
      _id,
      { $set: updatedFields },
      { new: true }, // Para devolver el usuario actualizado...
    );

    return res.status(200).json(updatedUsuario);
    // return res.status(200).json({ message: 'Todo OK...!' });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { _id } = req.params;

    const findUsuario = await Usuario.findById(_id);

    if (!findUsuario)
      return res
        .status(404)
        .json({ message: 'Usuario no encontrado...!' });

    // Se elimina el usuario de la BD...
    const deletedUsuario = await Usuario.findByIdAndDelete(
      _id,
    );

    return res.sendStatus(200);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};
