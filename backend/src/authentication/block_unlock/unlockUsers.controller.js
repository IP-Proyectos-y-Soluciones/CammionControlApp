import Usuario from '../../models/Usuario';
import redis from '../../libs/RedisClient';

const LOGIN_ATTEMPTS_KEY = (usuario) =>
  `login_attempts_${usuario}`;

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
    await usuarioReg.save();

    // Se restablecer el contador de intentos fallidos en Redis
    const attemptsKey = LOGIN_ATTEMPTS_KEY(usuario);
    await redis.del(attemptsKey);

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
