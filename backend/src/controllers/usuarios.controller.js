import Usuario from '../models/Usuario';
import Persona from '../models/Persona';

export const createUsuario = async (req, res) => {
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

    // Crea un nuevo usuario con la referencia a la persona existente
    const newUsuario = new Usuario({
      usuario,
      password,
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
    res.status(500).json(error);
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
    res.status(500).json(error);
  }
};

export const getUsuario = async (req, res) => {
  try {
    const { usuario } = req.params;

    const findUsuario = await Usuario.find({
      usuario: usuario,
    });

    if (!usuario)
      return res
        .status(404)
        .json({ message: 'Usuario no encontrado...!' });

    return res.status(200).json(findUsuario);
  } catch (error) {
    res.status(500).json(error);
  }
};
