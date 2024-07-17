import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECK = process.env.SKEY_TOKEN;

export const token = (savedUser) => {
  const payload = {
    _id: savedUser.id,
    rol: savedUser.roles,
  };

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECK,
      { expiresIn: '1d' },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      },
    );
  });
};
