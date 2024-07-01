import { Router } from 'express';
import { registrarUsuario } from '../controllers/usuarios.controller';
import { validateUser } from '../middlewares/validateUser';

const router = Router();

router.post('/addusuario', validateUser, registrarUsuario);

export default router;
