import Usuario from '../models/Usuario';

export const AuxAuthMiddleware = async (req, res, next) => {
    try {
        if (!req.session.cedula || !req.session.logged) {
            return res.status(401).json({
                message: 'Debe iniciar sesión para acceder a esta ruta.',
            });
        }

        // Opcional: verificar si el estado 'logged' en la base de datos sigue siendo true
        const usuarioReg = await Usuario.findOne({
            usuario_cedula: req.session.cedula,
        });

        if (!usuarioReg || !usuarioReg.logged) {
            return res.status(401).json({
                message:
                    'La sesión no es válida. Por favor, inicie sesión nuevamente.',
            });
        }

        // Si todo se encuentra en orden, permitir el acceso a la siguiente ruta o función...
        next();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
