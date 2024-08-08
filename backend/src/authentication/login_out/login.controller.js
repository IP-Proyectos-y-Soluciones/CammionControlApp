import Usuario from '../../models/Usuario';
import { decrypted } from '../passwords/decrypted';
// import { token } from '../tokens/token'; // Activar para la producción...
import { isLogin } from '../../test/vartest';

const MAX_LOGIN_ATTEMPTS = 3;

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

    if (usuarioReg.estado === 'Bloqueado') {
      return res.status(403).json({
        message:
          'Usuario bloqueado. Contacte al administrador para desbloquearlo.',
      });
    }
    if (!(await decrypted(password, usuarioReg.password))) {
      usuarioReg.intentosFallidos += 1;
      usuarioReg.ultimoIntento = new Date();

      if (
        usuarioReg.intentosFallidos >= MAX_LOGIN_ATTEMPTS
      ) {
        usuarioReg.estado = 'Bloqueado';
      }

      await usuarioReg.save();

      isLogin = true;

      return res
        .status(401)
        .json({ message: 'Password inválido...!' });
    }

    // Resetear intentos fallidos en caso de login exitoso
    usuarioReg.intentosFallidos = 0;
    usuarioReg.ultimoIntento = null;
    await usuarioReg.save();

    // // Esta sección tiene que ser activada en definitiva para la producción...
    // const userToken = await token(usuarioReg);

    // res.cookie('auth-token', userToken, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: 'None',
    //   // partitioned: true,
    // });

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
