import { Router } from "express";
import {
<<<<<<< HEAD
    createLicencia,
    getLicenciaByID,
    getLicencia,
    putLicencia,
    deleteLicencia,
} from '../controllers/licencias.controller';
=======
  createLicencia,
  getLicencia,
  putLicencia,
  deleteLicencia,
  parser,
} from "../controllers/licencias.controller";
>>>>>>> origin/Dianis2
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

const router = Router();

router.post(
  "/addlicencia",
  parser,
  // TokenValidation,
  createLicencia
);

router.get(
  "/",
  // TokenValidation,
  getLicencia
);

router.get(
    '/licencia/:id',
    // TokenValidation,
    getLicenciaByID,
);

router.put(
  "/edit/:id",
  parser,
  // TokenValidation,
  putLicencia
);

router.delete(
  "/del/:id",
  // TokenValidation,
  deleteLicencia
);

export default router;
