import { Router } from "express";
import {
<<<<<<< HEAD
    createTanqueo,
    getAllTanqueos,
    getTanqueoById,
    updateTanqueo,
    deleteTanqueo,
    // getDriverByDNI,
    // getVehicleById,
} from '../controllers/tanqueos.controller';
=======
  createTanqueo,
  getAllTanqueos,
  getTanqueoById,
  updateTanqueo,
  deleteTanqueo,
  parser,
} from "../controllers/tanqueos.controller";
>>>>>>> origin/Dianis2
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

const router = Router();

router.post(
  "/create",
  // TokenValidation,
  parser,
  createTanqueo
);

router.get(
  "/",
  // TokenValidation,
  getAllTanqueos
);

router.get(
  "/:id",
  // TokenValidation,
  getTanqueoById
);

router.patch(
  "/update/:id",
  // TokenValidation,
  parser,
  updateTanqueo
);

router.delete(
  "/delete/:id",
  // TokenValidation,
  deleteTanqueo
);

// router.get(
//     '/driverced/:cedula',
//     // TokenValidation,
//     getDriverByDNI,
// );
// router.get(
//     '/vehicleid/:id',
//     // TokenValidation,
//     getVehicleById,
// );

export default router;
