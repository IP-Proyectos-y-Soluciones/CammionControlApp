import Router from 'express';
import { unlockUser } from '../authentication/block_unlock/unlockUsers.controller';
// import { TokenValidation } from '../authentication/tokens/verifyToken';
import { AuxAuthMiddleware } from '../middlewares/auxAuthMiddleware';

const router = Router();

router.post(
    '/unlock-user',
    // TokenValidation, // Activar para la producción...
    AuxAuthMiddleware, // Debe suprimirse para la producción...
    unlockUser,
);

export default router;
