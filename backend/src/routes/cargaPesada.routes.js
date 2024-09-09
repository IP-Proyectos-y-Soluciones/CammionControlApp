import { Router } from 'express';
import {
    createHeavyLoadForm,
    // deleteHeavyLoadForm,
    getAllHeavyLoadForms,
    getHeavyLoadByFormNumber,
    getHeavyLoadByFormID,
    // updateHeavyLoadForm,
} from '../controllers/cargaPesada.controller';
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para

const router = Router();

router.post(
    '/addplanillacarga',
    // TokenValidation,
    createHeavyLoadForm,
);

router.get(
    '/',
    // TokenValidation,
    getAllHeavyLoadForms,
);

router.get(
    '/planilla/:n_planilla',
    // TokenValidation,
    getHeavyLoadByFormNumber,
);

router.get(
    '/planillaid/:_id',
    // TokenValidation,
    getHeavyLoadByFormID,
);

// router.patch(
//   '/planilla/edit/:n_planilla',
//   TokenValidation,
//   updateHeavyLoadForm,
// );

// router.delete(
//   '/planilla/delete/:n_planilla',
//   TokenValidation,
//   deleteHeavyLoadForm,
// );

export default router;
