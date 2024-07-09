import { Router } from "express";
import {
  createLicencia,
  getLicencia,
  putLicencia,
  deleteLicencia,
} from "../controllers/licencia.controller";

const router = Router();

router.post("/", createLicencia);

router.get("/", getLicencia);

router.put("/:id", putLicencia);

router.put("/:id", deleteLicencia);

export default router;
