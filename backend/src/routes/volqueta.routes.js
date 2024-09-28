import { Router } from 'express';
import {
    createVolqueta,
    getAllVolquetasForms,
    getVolqueta,
    putVolqueta,
    deleteVolqueta,
} from '../controllers/volquetas.controller';
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...

const router = Router();

router.post(
    '/addplanilla',
    // TokenValidation,
    createVolqueta,
);

router.get(
    '/allforms',
    // TokenValidation,
    getAllVolquetasForms,
);

router.get(
    '/',
    // TokenValidation,
    getVolqueta,
);

router.patch(
    '/edit/:id',
    // TokenValidation,
    putVolqueta,
);

router.patch(
    '/edit/',
    // TokenValidation,
    putVolqueta,
);

router.delete(
    '/:id',
    // TokenValidation,
    deleteVolqueta,
);

export default router;
