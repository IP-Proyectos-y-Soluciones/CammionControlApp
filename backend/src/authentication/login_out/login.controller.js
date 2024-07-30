import Usuario from '../../models/Usuario';
import { decrypted } from '../passwords/decrypted';
import { token } from '../tokens/token';
import redis from '../../libs/RedisClient';

const MAX_LOGIN_ATTEMPTS = 3;
const LOGIN_ATETMPTS_KEY = (usuario) =>
  `login_attempts_${usuario}`;

export const login = async (req, res) => {
  try {
    const { usuario, password } = req.body;

    const usuarioReg = await Usuario.findOne({
      usuario,
    });

    if (!usuarioReg) {
      return res
        .status(404)
        .json({ message: 'Usuario no encontrado...!' });
    }

    // // /////////console.log(usuarioReg.estado);

    if (usuarioReg.estado === 'Bloqueado') {
      return res.status(403).json({
        message:
          'Usuario bloqueado. Contacte al administrador para desbloquearlo.',
      });
    }

    const attemptsKey = LOGIN_ATETMPTS_KEY(usuario);

    // Obtener el número de intentos fallidos de inicio de sesión desde Redis...
    const attempts = await redis.get(attemptsKey);

    if (attempts && attempts >= MAX_LOGIN_ATTEMPTS) {
      usuarioReg.estado = 'Bloqueado';
      await usuarioReg.save();
      return res.status(403).json({
        message:
          'Cuenta bloqueada por múltiples intentos fallidos...',
      });
    }

    if (!(await decrypted(password, usuarioReg.password))) {
      // Incrementar el número de intentos fallidos en Redis...
      await redis.incr(attemptsKey);

      // Establecer un tiempo de expiración para el contador
      // si es la primera vez
      if (!attempts) {
        await redis.expire(attemptsKey, 7200); // Expira en 2 horas...
      }

      return res
        .status(401)
        .json({ message: 'Password inválido...!' });
    }

    // Se restablece el contador de intentos fallidos en caso de
    // inicio de sesión exitoso...
    await redis.del(attemptsKey);

    const userToken = await token(usuarioReg);

    res.cookie('auth-token', userToken, {
      sameSite: 'none',
      secure: true,
    });

    return res.status(200).json({
      message: `El usuario ${usuario} se ha loggeado exitosamente...!`,
      usuarioReg,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};
