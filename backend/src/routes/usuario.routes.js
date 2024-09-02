import { Router } from 'express';
import {
    registrarUsuario,
    deleteUsuario,
    getAllUsuarios,
    getUsuario,
    updateUsuario,
} from '../controllers/usuarios.controller';
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...
import { validateUser } from '../middlewares/validateUser';

const router = Router();

router.post(
    '/addusuario',
    // TokenValidation,
    validateUser,
    registrarUsuario,
);

router.get(
    '/',
    // TokenValidation,
    getAllUsuarios,
);

router.get(
    '/:usuario',
    // TokenValidation,
    getUsuario,
);

// Para realizar actualización del usuario proporcionando
// por URL el _id del mismo registrado...
router.patch(
    '/usuario/edit/:_id',
    // TokenValidation,
    updateUsuario,
);

router.patch(
    '/usuario/edit',
    // TokenValidation,
    updateUsuario,
);

router.delete(
    '/delete/:_id',
    // TokenValidation,
    deleteUsuario,
);

export default router;
