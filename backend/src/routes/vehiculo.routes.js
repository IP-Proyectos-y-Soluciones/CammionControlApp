import { Router } from 'express';
import {
    createVehiculo,
    getAllVehiculos,
    getVehiculoById,
    getVehiculoByPlaca,
    assignDriverToVehicle,
    updateVehiculo,
    deleteVehiculo,
} from '../controllers/vehiculos.controller.js';
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

const router = Router();

router.post(
    '/create',
    // TokenValidation,
    createVehiculo,
);

router.get(
    '/',
    // TokenValidation,
    getAllVehiculos,
);

router.get(
    '/:id',
    // TokenValidation,
    getVehiculoById,
);

router.get(
    '/placa/:placa',
    // TokenValidation,
    getVehiculoByPlaca,
);

router.patch(
    '/vehiculo/asignacion',
    // TokenValidation,
    assignDriverToVehicle,
);

router.patch(
    '/update/:id',
    // TokenValidation,
    updateVehiculo,
);

router.delete(
    '/delete/:id',
    // TokenValidation,
    deleteVehiculo,
);

export default router;
