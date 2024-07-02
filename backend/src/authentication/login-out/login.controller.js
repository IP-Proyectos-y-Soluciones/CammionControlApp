import Usuario from '../../models/Usuario';
import { decrypted } from '../passwords/decrypted';
import { token } from '../tokens/token';

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

    if (!(await decrypted(password, usuarioReg.password))) {
      return res
        .status(401)
        .json({ message: 'Password inválido...!' });
    }

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
