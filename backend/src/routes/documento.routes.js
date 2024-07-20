import { Router } from "express";
import {
  createDocumento,
  getAllDocumento,
  putDocumento,
  deleteDocumento,
} from "../controllers/documentos.controller";
import { TokenValidation } from "../authentication/tokens/verifyToken";

const router = Router();

router.post("/", TokenValidation, createDocumento);

router.get("/", TokenValidation, getAllDocumento);

router.put("/:id", TokenValidation, putDocumento);

router.delete("/:id", TokenValidation, deleteDocumento);

export default router;
