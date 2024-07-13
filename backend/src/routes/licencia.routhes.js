import { Router } from "express";
import {
  createLicencia,
  getLicencia,
  putLicencia,
  deleteLicencia,
} from "../controllers/licencia.controller";
import { TokenValidation } from "../authentication/tokens/verifyToken";

const router = Router();

router.post("/", TokenValidation, createLicencia);

router.get("/", TokenValidation, getLicencia);

router.put("/:id", TokenValidation, putLicencia);

router.delete("/:id", TokenValidation, deleteLicencia);

export default router;
