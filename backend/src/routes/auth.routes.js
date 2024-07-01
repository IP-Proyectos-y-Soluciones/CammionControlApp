import { Router } from 'express';
import { login } from '../authentication/login/login.controller';

const router = Router();

router.post('/login', login);

export default router;
