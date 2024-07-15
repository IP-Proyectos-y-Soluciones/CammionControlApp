import { Router } from 'express';
import { login } from '../authentication/login-out/login.controller';
import { logout } from '../authentication/login-out/logout.controller';

const router = Router();

router.post('/login', login);
router.post('/logout', logout);

export default router;
