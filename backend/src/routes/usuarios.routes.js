import { Router } from 'express';
import { registrarUsuario } from '../controllers/usuarios.controller';
import { TokenValidation } from '../authentication/tokens/verifyToken';
import { validateUser } from '../middlewares/validateUser';

const router = Router();

router.post(
  '/addusuario',
  TokenValidation,
  validateUser,
  registrarUsuario,
);

export default router;
