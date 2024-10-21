import { Router } from 'express';
import {
    createVolqueta,
    getAllVolquetasForms,
    getVolqueta,
    putVolqueta,
    deleteVolqueta,
} from '../controllers/volquetas.controller';
import { generarNumeroPlanilla } from '../libs/GenRandomControlNumb';
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
