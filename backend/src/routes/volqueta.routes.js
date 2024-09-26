import { Router } from "express";
import {
  createVolqueta,
  getVolqueta,
  putVolqueta,
  deleteVolqueta,
} from "../controllers/volquetas.controller";
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

const router = Router();

router.post(
  "/addplanilla",
  // TokenValidation,
  createVolqueta
);

router.get(
  "/",
  // TokenValidation,
  getVolqueta
);

router.put(
  "/:n_planilla",
  // TokenValidation,
  putVolqueta
);

router.delete(
  "/:n_planilla",
  // TokenValidation,
  deleteVolqueta
);

export default router;
