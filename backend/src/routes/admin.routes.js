import Router from 'express';
import { unlockUser } from '../authentication/block_unlock/unlockUsers.controller';
// import { TokenValidation } from '../authentication/tokens/verifyToken';

const router = Router();

router.post(
  '/unlock-user',
  // TokenValidation,
  unlockUser,
);

export default router;
