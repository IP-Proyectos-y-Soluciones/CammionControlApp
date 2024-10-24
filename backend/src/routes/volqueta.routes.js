import { Router } from "express";
import {
<<<<<<< HEAD
    createVolqueta,
    getAllVolquetasForms,
    getVolqueta,
    putVolqueta,
    deleteVolqueta,
} from '../controllers/volquetas.controller';
import { generarNumeroPlanilla } from '../libs/GenRandomControlNumb';
=======
  createVolqueta,
  getVolqueta,
  putVolqueta,
  deleteVolqueta,
} from "../controllers/volquetas.controller";
>>>>>>> origin/Dianis2
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

const router = Router();

router.get(
    '/gennumber',
    // TokenValidation,
    (req, res) => {
        const numbOfForm = generarNumeroPlanilla();
        res.json({ numbOfForm });
    },
);

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

<<<<<<< HEAD
router.patch(
    '/edit/:id',
    // TokenValidation,
    putVolqueta,
);

router.patch(
    '/edit/',
    // TokenValidation,
    putVolqueta,
=======
router.put(
  "/:n_planilla?",
  // TokenValidation,
  putVolqueta
>>>>>>> origin/Dianis2
);

router.delete(
  "/:n_planilla?",
  // TokenValidation,
  deleteVolqueta
);

export default router;
