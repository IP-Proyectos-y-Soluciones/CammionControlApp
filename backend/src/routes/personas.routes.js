import { Router } from 'express';
import {
  createPersona,
  getAllPersonas,
  getPersonaByDNI,
} from '../controllers/personas.controller';

const router = Router();

router.post('/addpersona', createPersona);

router.get('/', getAllPersonas);

router.get('/persona/:cedula', getPersonaByDNI);

export default router;
