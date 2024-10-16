import { Router } from 'express';
import {
    createLicencia,
    getLicenciaByID,
    getLicencia,
    putLicencia,
    deleteLicencia,
} from '../controllers/licencias.controller';
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

const router = Router();

router.post(
    '/addlicencia',
    // TokenValidation,
    createLicencia,
);

router.get(
    '/',
    // TokenValidation,
    getLicencia,
);

router.get(
    '/licencia/:id',
    // TokenValidation,
    getLicenciaByID,
);

router.put(
    '/edit/:id',
    // TokenValidation,
    putLicencia,
);

router.delete(
    '/del/:id',
    // TokenValidation,
    deleteLicencia,
);

export default router;
