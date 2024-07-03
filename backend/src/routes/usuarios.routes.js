import { Router } from 'express';
import {
  registrarUsuario,
  getAllUsuarios,
  getUsuario,
  updateUsuario,
} from '../controllers/usuarios.controller';
import { TokenValidation } from '../authentication/tokens/verifyToken';
import { validateUser } from '../middlewares/validateUser';

const router = Router();

router.post(
  '/addusuario',
  TokenValidation,
  validateUser,
  registrarUsuario,
);

router.get('/', TokenValidation, getAllUsuarios);

router.get('/:usuario', TokenValidation, getUsuario);

router.put('/:_id', TokenValidation, updateUsuario);

export default router;
