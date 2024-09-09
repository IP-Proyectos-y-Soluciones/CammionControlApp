import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const SECK = process.env.SKEY_TOKEN;

/**
 * La función TokenValidation busca un token de autenticación válido en las cookies de solicitud y lo
 * verifica utilizando una clave secreta antes de permitir el acceso al siguiente middleware.
 * @param req - El parámetro `req` en la función `TokenValidation` es un objeto que representa la
 * solicitud HTTP. Contiene información sobre la solicitud realizada al servidor, como encabezados,
 * parámetros, cuerpo, cookies, etc. En esta función específica, se utiliza para extraer el valor de la
 * cookie 'auth-token'.
 * @param res - El parámetro `res` en la función `TokenValidation` es el objeto de respuesta en
 * Express.js. Se utiliza para enviar una respuesta al cliente que realiza la solicitud. En esta
 * función, se utiliza para enviar diferentes códigos de estado y mensajes según las condiciones de la
 * validación del token.
 * @param next - El parámetro `siguiente` en la función `TokenValidation` es una función de devolución
 * de llamada que se utiliza para pasar el control a la siguiente función de middleware en la pila.
 * Cuando se llama, ejecuta la siguiente función de middleware. En este contexto, se llama a `next()`
 * después de que la validación del token sea exitosa, lo que permite que la solicitud
 * @returns La función `TokenValidation` devuelve diferentes respuestas HTTP según ciertas condiciones:
 */
export const TokenValidation = (req, res, next) => {
    const { 'auth-token': authToken } = req.cookies;

    if (!authToken)
        return res.status(401).json({ message: 'Autorización denegada...!' });

    jwt.verify(authToken, SECK, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token inválido...' });

        req.allUserData = user;

        next();
    });
};
