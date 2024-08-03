import { Router } from 'express';
import { login } from '../authentication/login_out/login.controller';
import { logout } from '../authentication/login_out/logout.controller';
import { TokenValidation } from '../authentication/tokens/verifyToken';

const router = Router();

router.post('/login', login);

router.post('/logout', logout);

// router.get('/check', TokenValidation, (req, res) => {
//   res.json({ isAuthenticated: true });
// });

export default router;
