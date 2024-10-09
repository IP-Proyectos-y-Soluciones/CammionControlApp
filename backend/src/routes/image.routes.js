import { Router } from 'express';
import { getRefuelingImageByID } from '../controllers/images.controller';

const router = Router();

router.get('/image/:refuelingID', getRefuelingImageByID);

export default router;
