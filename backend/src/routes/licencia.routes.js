import { Router } from "express";
import {
  createLicencia,
  getLicencia,
  putLicencia,
  deleteLicencia,
  parser,
} from "../controllers/licencias.controller";
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
