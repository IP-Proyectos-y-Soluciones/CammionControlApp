export const logout = (req, res) => {
  res.cookie('auth-token', '', {
    expires: new Date(0),
    sameSite: 'none',
    secure: true,
  });
  res.cookie('csrf-token', '', {
    expires: new Date(0),
    sameSite: 'none',
    secure: true,
  });
  res.cookie('csrf-secret', '', {
    expires: new Date(0),
    sameSite: 'none',
    secure: true,
  });

  // return res.sendStatus(200);
  return res
    .status(200)
    .json({ message: 'Cierre de sesión exitoso...!' });
};
