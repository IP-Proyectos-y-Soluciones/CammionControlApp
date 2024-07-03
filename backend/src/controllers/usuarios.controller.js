import Usuario from '../models/Usuario';
import Persona from '../models/Persona';
import { encrypted } from '../authentication/passwords/encrypted';

export const registrarUsuario = async (req, res) => {
  const { usuario, password, roles, estado, personaId } =
    req.body;

  try {
    // Verifica si la persona existe
    const persona = await Persona.findById(personaId);

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
      usuario,
      password: passwordEncrypted,
      roles,
      estado,
      persona: persona._id,
    });

    const savedUsuario = await newUsuario.save();

    return res.status(201).json({
      message:
        'El nuevo usuario ha sido creado exitosamente...!',
      savedUsuario,
    });
  } catch (error) {
    return res.status(500).json(error);
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
    return res.status(500).json(error);
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
    return res.status(500).json(error);
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { _id } = req.params;

    const findUsuario = await Usuario.findById(_id);

    if (!findUsuario)
      return res
        .status(404)
        .json({ message: 'Usuario no encontrado...!' });

    // Provisional. Solo para test...
    return res.status(200).json(findUsuario);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteUsuario = async (req, res) => {};
