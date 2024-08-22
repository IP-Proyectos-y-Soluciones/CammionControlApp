import { Router } from 'express';
import {
  createPersona,
  deletePersona,
  getAllPersonas,
  getPersonaByDNI,
  getPersonaByID,
  updatePersona,
} from '../controllers/personas.controller';
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...
import { validatePerson } from '../middlewares/validatePerson';

const router = Router();

router.post(
  '/addpersona',
  // TokenValidation,
  validatePerson,
  createPersona,
);

router.get(
  '/',
  // TokenValidation,
  getAllPersonas,
);

router.get(
  '/personaced/:cedula',
  // TokenValidation,
  getPersonaByDNI,
);

router.get(
  '/personaid/:_id',
  // TokenValidation,
  getPersonaByID,
);

// Para realizar actualización del empleado proporcionando
// por URL el _id del mismo registrado...
router.patch(
  '/persona/edit/:_id',
  // TokenValidation,
  updatePersona,
);

// Para realizar actualización del empleado proporcionando
// por body el número de cédula...
router.patch(
  '/persona/edit',
  // TokenValidation,
  updatePersona,
);

// Para eliminar un empleado proporcionando
// por URL el _id del mismo registrado...
router.delete(
  '/persona/delete/:_id',
  // TokenValidation,
  deletePersona,
);

// Para eliminar un empleado proporcionando
// por body el número de cédula...
router.delete(
  '/persona/delete',
  // TokenValidation,
  deletePersona,
);

export default router;
