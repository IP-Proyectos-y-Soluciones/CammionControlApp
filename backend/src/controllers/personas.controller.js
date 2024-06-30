import Persona from '../models/Persona';

export const createPersona = async (req, res) => {
  const {
    cedula,
    nombres,
    apellidos,
    fecha_nacimiento,
    correo,
    telefono,
    fecha_inicio_contrato,
    fecha_final_contrato,
    tipo_de_contrato,
  } = req.body;

  try {
    const newPersona = new Persona({
      cedula,
      nombres,
      apellidos,
      fecha_nacimiento,
      correo,
      telefono,
      fecha_inicio_contrato,
      fecha_final_contrato,
      tipo_de_contrato,
    });

    const savedPersona = await newPersona.save();

    return res.status(201).json({
      message:
        'Una nueva persona ha sido registrada exitosamente...!',
      savedPersona,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllPersonas = async (req, res) => {
  try {
    const personas = await Persona.find();

    if (!personas)
      return res.status(404).json({
        message: 'No se ha encontrado ninguna persona...',
      });

    return res.status(200).json(personas);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getPersonaByDNI = async (req, res) => {
  try {
    const { cedula } = req.params;

    const persona = await Persona.find({
      cedula: cedula,
    });

    if (!persona)
      return res
        .status(404)
        .json({ message: 'Persona no encontrada...!' });

    return res.status(200).json(persona);
  } catch (error) {
    res.status(500).json(error);
  }
};
