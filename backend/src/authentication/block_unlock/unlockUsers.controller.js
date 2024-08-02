import Usuario from '../../models/Usuario';

export const unlockUser = async (req, res) => {
  try {
    const { usuario } = req.body;

    const usuarioReg = await Usuario.findOne({ usuario });

    if (!usuarioReg) {
      return res
        .status(404)
        .json({ message: 'Usuario no encontrado...!' });
    }

    usuarioReg.estado = 'Activo';
    usuarioReg.intentosFallidos = 0;
    usuarioReg.ultimoIntento = null;
    await usuarioReg.save();

    return res.status(200).json({
      message: `El usuario ${usuario} ha sido desbloqueado exitosamente.`,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};
