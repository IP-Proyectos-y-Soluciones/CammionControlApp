import { Router } from 'express';
import {
  createTanqueo,
  getAllTanqueos,
  getTanqueoById,
  updateTanqueo,
  deleteTanqueo,
} from '../controllers/tanqueos.controller';
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

const router = Router();

router.post(
  '/create',
  // TokenValidation,
  createTanqueo,
);

router.get(
  '/',
  // TokenValidation,
  getAllTanqueos,
);

router.get(
  '/:id',
  // TokenValidation,
  getTanqueoById,
);

router.patch(
  '/update/:id',
  // TokenValidation,
  updateTanqueo,
);

router.delete(
  '/delete/:id',
  // TokenValidation,
  deleteTanqueo,
);

export default router;
