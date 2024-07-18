import { Router } from "express";
import {
  createPersona,
  deletePersona,
  getAllPersonas,
  getPersonaByDNI,
  getPersonaByID,
  updatePersona,
} from "../controllers/personas.controllers";
import { TokenValidation } from "../authentication/tokens/verifyToken";
import { validatePerson } from "../middlewares/validatePerson";

const router = Router();

router.post("/addpersona", TokenValidation, validatePerson, createPersona);

router.get("/", TokenValidation, getAllPersonas);

router.get("/personaced/:cedula", TokenValidation, getPersonaByDNI);

router.get("/personaid/:_id", TokenValidation, getPersonaByID);

router.patch("/persona/edit/:_id", TokenValidation, updatePersona);

router.delete("/persona/delete/:_id", TokenValidation, deletePersona);

export default router;
