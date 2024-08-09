// Este es un middleware para pruebas en desarrollo... Debe suprimirse para producción...
import { FindLoginStatus } from '../libs/changeStatusLogin';

export const AuxAuthMiddleware = async (req, res, next) => {
  try {
    const loginStatus = await FindLoginStatus(1);

    if (loginStatus === false) {
      return res.status(401).json({
        message:
          'Acceso NO permitido: Debe loggearse primero...!!!',
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: 'Error al verificar el estado de login',
      error: error.message,
    });
  }
};
