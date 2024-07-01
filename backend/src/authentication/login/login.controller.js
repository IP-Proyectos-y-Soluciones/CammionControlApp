import Usuario from '../../models/Usuario';
import { decrypted } from '../passwords/decrypted';

export const login = async (req, res) => {
  try {
    const { usuario, password } = req.body;

    const usuarioReg = await Usuario.findOne({
      usuario: usuario,
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
