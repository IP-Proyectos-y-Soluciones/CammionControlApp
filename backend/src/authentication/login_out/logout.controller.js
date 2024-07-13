export const logout = (req, res) => {
  res.cookie("auth-token", "", {
    expires: new Date(0),
  });

  return res.sendStatus(200);
};
