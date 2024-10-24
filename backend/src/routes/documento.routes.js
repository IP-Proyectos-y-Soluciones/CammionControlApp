import { Router } from "express";
import {
  createDocumento,
  getAllDocumento,
  putDocumento,
  deleteDocumento,
  parser,
} from "../controllers/documentos.controller";
// import { TokenValidation } from '../authentication/tokens/verifyToken'; Activar para la producción...

const router = Router();

router.post(
  "/newdoc",
  // TokenValidation,
  parser,
  createDocumento
);

router.get(
  "/",
  // TokenValidation,
  getAllDocumento
);

router.put(
  "/:id",
  // TokenValidation,
  putDocumento
);

router.delete(
  "/:id",
  // TokenValidation,
  deleteDocumento
);

export default router;
