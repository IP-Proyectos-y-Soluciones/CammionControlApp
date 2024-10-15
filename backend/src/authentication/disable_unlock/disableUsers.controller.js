import Usuario from '../../models/Usuario';

export const disableUser = async (req, res) => {
    try {
        const { usuario } = req.body;

        const usuarioReg = await Usuario.findOne({ usuario });

        if (!usuarioReg) {
            return res
                .status(404)
                .json({ message: 'Usuario no encontrado...!' });
        }

        usuarioReg.estado = 'Bloqueado';
        // usuarioReg.intentosFallidos = 0;
        // usuarioReg.ultimoIntento = null;
        await usuarioReg.save();

        return res.status(200).json({
            message: `El usuario ${usuario} ha sido bloqueado satisfactoriamente...!`,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json(error);
        }
    }
};
