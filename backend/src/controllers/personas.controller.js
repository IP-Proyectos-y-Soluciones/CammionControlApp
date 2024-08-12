import Persona from '../models/Persona';
import Usuario from '../models/Usuario';
import { FindLoginStatus } from '../libs/changeStatusLogin';

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
      fecha_final_contrato: fecha_final_contrato || null,
      tipo_de_contrato,
    });

    const savedPersona = await newPersona.save();

    return res.status(201).json({
      message:
        'Una nueva persona ha sido registrada exitosamente...!',
      savedPersona,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

export const getAllPersonas = async (req, res) => {
  try {
    // ------------------------------------------------------------------------------------------------------------- //
    // **** Esta sección deberá ser removida para la producción... **** //
    const login = await FindLoginStatus(1);

    if (login === false)
      return res.status(401).json({
        message:
          'Acceso NO permitido: Debe loggearse primero...!!!',
      });
    // ------------------------------------------------------------------------------------------------------------- //

    const personas = await Persona.find();

    if (!personas)
      return res.status(404).json({
        message: 'No se ha encontrado ninguna persona...',
      });

    return res.status(200).json(personas);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

export const getPersonaByDNI = async (req, res) => {
  try {
    const { cedula } = req.params;

    const persona = await Persona.findOne({
      cedula: cedula,
    });

    if (!persona)
      return res
        .status(404)
        .json({ message: 'Persona no encontrada...!' });

    return res.status(200).json(persona);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

export const getPersonaByID = async (req, res) => {
  try {
    const { _id } = req.params;

    const persona = await Persona.findById(_id);

    if (!persona)
      return res
        .status(404)
        .json({ message: 'Persona no encontrada...!' });

    return res.status(200).json(persona);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

export const updatePersona = async (req, res) => {
  try {
    const { _id } = req.params;
    const {
      nombres,
      apellidos,
      fecha_nacimiento,
      correo,
      telefono,
      fecha_inicio_contrato,
      fecha_final_contrato,
      tipo_de_contrato,
    } = req.body;

    const findPersona = await Persona.findById(_id);

    if (!findPersona)
      return res
        .status(404)
        .json({ message: 'Usuario no encontrado...!' });

    // Se crea un objeto con los campos a actualizar...
    const updatedFields = {};

    if (nombres !== undefined)
      updatedFields.nombres = nombres;
    if (apellidos !== undefined)
      updatedFields.apellidos = apellidos;
    if (fecha_nacimiento !== undefined)
      updatedFields.fecha_nacimiento = fecha_nacimiento;
    if (correo !== undefined) updatedFields.correo = correo;
    if (telefono !== undefined)
      updatedFields.telefono = telefono;
    if (fecha_inicio_contrato !== undefined)
      updatedFields.fecha_inicio_contrato =
        fecha_inicio_contrato;
    if (fecha_final_contrato !== undefined)
      updatedFields.fecha_final_contrato =
        fecha_final_contrato;
    if (tipo_de_contrato !== undefined)
      updatedFields.tipo_de_contrato = tipo_de_contrato;

    // Se actualiza la persona en la BD...
    const updatedPersona = await Persona.findByIdAndUpdate(
      _id,
      { $set: updatedFields },
      { new: true }, // Para devolver persona actualizada...
    );

    return res.status(200).json(updatedPersona);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

export const deletePersona = async (req, res) => {
  try {
    const { _id } = req.params;

    const findPersona = await Persona.findById(_id);

    if (!findPersona)
      return res
        .status(404)
        .json({ message: 'Persona no encontrado...!' });

    const findUsuarioPersona = await Usuario.findOne({
      persona: findPersona._id,
    });

    // Si tiene un "usuario" creado, se procede a su eliminación...
    if (findUsuarioPersona) {
      await Usuario.findByIdAndDelete(
        findUsuarioPersona._id,
      );
    }

    // Se elimina la persona de la BD...
    const deletedPersona = await Persona.findByIdAndDelete(
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
