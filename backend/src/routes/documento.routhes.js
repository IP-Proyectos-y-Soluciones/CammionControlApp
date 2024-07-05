import { Router } from "express";
import {
  createDocumento,
  getAllDocumento,
  putDocumento,
  deleteDocumento,
} from "../controllers/documentos.controllers";

const router = Router();

router.post("/", createDocumento);

router.get("/", getAllDocumento);

router.put("/:id", putDocumento);

router.put("/:id", deleteDocumento);

export default router;
