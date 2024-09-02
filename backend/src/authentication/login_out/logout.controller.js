// import { ChangeLoginStatus } from '../../libs/changeSessionStatus';
import Usuario from '../../models/Usuario';

export const logout = async (req, res) => {
    try {
        const cedula = req.session.cedula;

        if (!cedula) {
            return res.status(400).json({
                message: 'No se encontró una sesión activa.',
            });
        }

        const usuario = await Usuario.findOne({
            usuario_cedula: cedula,
        });

        if (usuario) {
            usuario.logged = false;
            await usuario.save();
        }

        // Destruir la sesión actual...
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destruyendo la sesión:', err);
                return res
                    .status(500)
                    .json({ message: 'Error al cerrar la sesión.' });
            }

            res.clearCookie('connect.sid'); // Opcional: limpiar la cookie de sesión...
            return res
                .status(200)
                .json({ message: 'Cierre de sesión exitoso...' });
        });

        // if (!req.session.cedula) {
        //   return res.status(400).json({
        //     message: 'No hay una sesión activa para cerrar.',
        //   });
        // }

        // // Actualizar el estado 'logged' del usuario en la base de datos...
        // const ususarioReg = await Usuario.findOne({
        //   usuario_cedula: req.session.cedula,
        // });

        // if (ususarioReg) {
        //   ususarioReg.logged = false;
        //   await ususarioReg.save();
        // }

        // // Destruir la sesión...
        // req.session.destroy((err) => {
        //   if (err) {
        //     return res.status(500).json({
        //       message: 'Error al cerrar la sessión...!',
        //     });
        //   }

        //   // Eliminar la cookie de sesión en el cliente...
        //   res.clearCookie('connect.sid'); // 'connect.sid' es el nombre de la cookie por defecto...

        //   return res.status(200).json({
        //     message: 'Sesión cerrada correctamente...!',
        //   });
        // });
    } catch (error) {
        console.error('Error en el controlador de logout:', error);
        return res.status(500).json({
            message: 'Error al intentar cerrar la sesión...!!!',
            error: error.message,
        });
    }

    // return res
    //   .status(200)
    //   .json({ message: 'Cierre de sesión exitoso...!' });
};
