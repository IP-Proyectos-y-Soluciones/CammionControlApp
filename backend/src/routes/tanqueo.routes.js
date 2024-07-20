import { Router } from 'express';
import {
  createTanqueo,
  getAllTanqueos,
  getTanqueoById,
  updateTanqueo,
  deleteTanqueo,
  parser,
} from '../controllers/tanqueos.controller';
import { TokenValidation } from '../authentication/tokens/verifyToken';

const router = Router();

router.post('/create',TokenValidation, parser, createTanqueo);
router.get('/', TokenValidation, getAllTanqueos);
router.get('/:id', TokenValidation, getTanqueoById);
router.patch('/update/:id',TokenValidation, parser, updateTanqueo);
router.delete(
  '/delete/:id',
  TokenValidation,
  deleteTanqueo,
);

export default router;
