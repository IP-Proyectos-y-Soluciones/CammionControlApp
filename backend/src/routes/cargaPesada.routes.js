import { Router } from 'express';
import {
  createHeavyLoadForm,
  deleteHeavyLoadForm,
  getAllHeavyLoadForms,
  getHeavyLoadByFormNumber,
  updateHeavyLoadForm,
} from '../controllers/cargaPesada.controller';
import { TokenValidation } from '../authentication/tokens/verifyToken';

const router = Router();

router.post(
  '/addcargapesada',
  TokenValidation,
  createHeavyLoadForm,
);

router.get('/', TokenValidation, getAllHeavyLoadForms);

router.get(
  '/planilla/:n_planilla',
  TokenValidation,
  getHeavyLoadByFormNumber,
);

router.patch(
  '/planilla/edit/:n_planilla',
  TokenValidation,
  updateHeavyLoadForm,
);

router.delete(
  '/planilla/delete/:n_planilla',
  TokenValidation,
  deleteHeavyLoadForm,
);
