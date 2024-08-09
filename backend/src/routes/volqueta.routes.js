import { Router } from 'express';
import {
  createVolqueta,
  getVolqueta,
  putVolqueta,
  deleteVolqueta,
} from '../controllers/volquetas.controller';
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

const router = Router();

router.post(
  '/',
  // TokenValidation,
  createVolqueta,
);

router.get(
  '/',
  // TokenValidation,
  getVolqueta,
);

router.put(
  '/:id',
  // TokenValidation,
  putVolqueta,
);

router.delete(
  '/:id',
  // TokenValidation,
  deleteVolqueta,
);

export default router;
