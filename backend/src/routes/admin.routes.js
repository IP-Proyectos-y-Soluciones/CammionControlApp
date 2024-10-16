import Router from 'express';
import { unlockUser } from '../authentication/disable_unlock/unlockUsers.controller';
import { disableUser } from '../authentication/disable_unlock/disableUsers.controller';
// import { TokenValidation } from '../authentication/tokens/verifyToken';
import { AuxAuthMiddleware } from '../middlewares/auxAuthMiddleware';

const router = Router();

router.post(
    '/disable-user',
    // TokenValidation, // Activar para la producción...
    AuxAuthMiddleware, // Debe suprimirse para la producción...
    disableUser,
);

router.post(
    '/unlock-user',
    // TokenValidation, // Activar para la producción...
    AuxAuthMiddleware, // Debe suprimirse para la producción...
    unlockUser,
);

export default router;
