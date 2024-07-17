import { Router } from 'express';
import {
  createMecanico,
  getAllMecanicos,
  getMecanicoById,
  updateMecanico,
  deleteMecanico,
} from '../controllers/mecanicos.controller';
import { TokenValidation } from '../authentication/tokens/verifyToken';

const router = Router();

router.post('/create', TokenValidation, createMecanico);
router.get('/', TokenValidation, getAllMecanicos);
router.get('/:id', TokenValidation, getMecanicoById);
router.patch(
  '/update/:id',
  TokenValidation,
  updateMecanico,
);
router.delete(
  '/delete/:id',
  TokenValidation,
  deleteMecanico,
);

export default router;
