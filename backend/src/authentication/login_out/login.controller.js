import Usuario from '../../models/Usuario';
import Persona from '../../models/Persona';
import Vehiculo from '../../models/Vehiculo';
import { decrypted } from '../passwords/decrypted';
// import { token } from '../tokens/token'; // Activar para la producción...

const MAX_LOGIN_ATTEMPTS = 3;

export const login = async (req, res) => {
    try {
        const { usuario, password } = req.body;

        const usuarioReg = await Usuario.findOne({
            usuario,
        });

        if (!usuarioReg) {
            return res
                .status(404)
                .json({ message: 'Usuario no encontrado...!' });
        }

        // Se obtiene el nombre completo del usuario loggeado para pasarlo junto
        // al resto de la data al Front...
        const employee = await Persona.findOne({
            cedula: usuarioReg.usuario_cedula,
        });
        const employeeFullName = employee.nombres + ' ' + employee.apellidos;

        if (usuarioReg.logged === true) {
            return res.status(304).json({
                message: 'Ya tiene una sesión abierta...!',
            });
        }

        if (usuarioReg.estado === 'Bloqueado') {
            return res.status(403).json({
                message:
                    'Usuario bloqueado. Contacte al administrador para desbloquearlo.',
            });
        }

        if (!(await decrypted(password, usuarioReg.password))) {
            // Manejo de intentos fallidos y bloqueo...
            usuarioReg.intentosFallidos += 1;
            usuarioReg.ultimoIntento = new Date();

            if (usuarioReg.intentosFallidos >= MAX_LOGIN_ATTEMPTS) {
                usuarioReg.estado = 'Bloqueado';
            }

            await usuarioReg.save();

            return res.status(401).json({ message: 'Password inválido...!' });
        }

        // Resetear intentos fallidos en caso de login exitoso
        usuarioReg.intentosFallidos = 0;
        usuarioReg.ultimoIntento = null;
        usuarioReg.logged = true;

        await usuarioReg.save();

        // // Esta sección tiene que ser activada en definitiva para la producción...
        // const userToken = await token(usuarioReg);

        // res.cookie('auth-token', userToken, {
        //   httpOnly: true,
        //   secure: true,
        //   sameSite: 'None',
        //   // partitioned: true,
        // });

        // Regenerar el ID de sesión para prevenir ataques de fijación de sesión...
        req.session.regenerate((err) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error al regenerar la sesión.',
                });
            }

            // Establecer datos en la nueva sesión...
            req.session._id = usuarioReg._id;
            req.session.roles = usuarioReg.roles;
            req.session.cedula = usuarioReg.usuario_cedula;
            req.session.logged = true;

            // Continuar con la respuesta...
            return res.status(200).json({
                message: `El usuario ${usuario} se ha loggeado exitosamente...!`,
                employeeFullName,
                usuarioReg,
            });
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json(error);
        }
    }
};

// ********** Funciones auxiliares para uso directo en el Front ********** //

export const getDriverByDNI = async (req, res) => {
    try {
        const { cedula } = req.params;

        const persona = await Persona.findOne({
            cedula: cedula,
        });

        if (!persona)
            return res
                .status(404)
                .json({ message: 'Persona no encontrada...!' });

        return res.status(200).json(persona);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json(error);
        }
    }
};

export const getVehicleById = async (req, res) => {
    const { id } = req.params;

    try {
        const vehiculo = await Vehiculo.findById(id);
        if (!vehiculo) {
            return res.status(404).send('ID no encontrado');
        }
        res.status(200).json({
            message: 'Búsqueda por ID exitosa',
            data: vehiculo,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

// *********************************************************** //
