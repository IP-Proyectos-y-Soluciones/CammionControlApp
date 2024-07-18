import { Router } from "express";
import {
  createPersona,
  getAllPersonas,
  getPersonaByDNI,
} from "../controllers/personas.controller";
import { TokenValidation } from "../authentication/tokens/verifyToken";

const router = Router();

router.post("/addpersona", TokenValidation, createPersona);
router.get("/", TokenValidation, getAllPersonas);
router.get("/persona/:cedula", TokenValidation, getPersonaByDNI);

export default router;
