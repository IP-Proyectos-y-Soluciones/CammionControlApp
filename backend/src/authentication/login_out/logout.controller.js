import { ChangeLoginStatus } from '../../libs/changeStatusLogin';

export const logout = (req, res) => {
  try {
    ChangeLoginStatus(false, 1);

    return res
      .status(200)
      .json({ message: 'You are logout...!' });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al intentar cambiar estado de login',
      error: error.message,
    });
  }

  // return res
  //   .status(200)
  //   .json({ message: 'Cierre de sesión exitoso...!' });
};
