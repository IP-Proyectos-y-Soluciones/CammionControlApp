import { Router } from 'express';
import { createUsuario } from '../controllers/usuarios.controller';
import { validateUser } from '../middlewares/validateUser';

const router = Router();

router.post('/addusuario', validateUser, createUsuario);

export default router;
