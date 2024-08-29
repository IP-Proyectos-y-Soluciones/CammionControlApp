import Usuario from '../models/Usuario';
import dotenv from 'dotenv';

dotenv.config();

export const AuthAdmMiddleware = async (req, res, next) => {
  try {
    const user = await Usuario.findOne({
      usuario_cedula: req.session.cedula,
    });

    const allowedRoleTypes = [
      process.env.ROLAD,
      process.env.ROLOWN,
    ];

    if (allowedRoleTypes.includes(user.roles)) {
      next();
    } else {
      return res.status(401).json({
        message:
          'No está autorizado para realizar esta operación...!',
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
