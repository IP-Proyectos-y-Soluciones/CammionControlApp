import { Router } from "express";
import { plantillaVolquetas } from "../pdf-excel/plantilla_volquetas";
import { plantillaCargaPesada } from "../pdf-excel/planilla_cargaPesada";
import { TokenValidation } from "../authentication/tokens/verifyToken";

const router = Router();

router.post("/pdf", /* TokenValidation,*/ plantillaVolquetas);
router.post("/pdf", /* TokenValidation,*/ plantillaCargaPesada);

export default router;
