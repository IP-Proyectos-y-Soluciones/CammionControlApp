import Usuario from '../../models/Usuario';

export const getAuthenticatedUser = async (req, res) => {
    try {
        // Busca el usuario por el userId almacenado en la sesión...
        const user = await Usuario.findById(req.session._id).select(
            '-password',
        ); // Se excluye la contraseña...

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        return res.json({ user });
    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};
