import { Router } from 'express';
import { getRefuelingImageByDNIAndInvoice } from '../controllers/images.controller';

const router = Router();

router.get('/image/:cedula/:recibo', getRefuelingImageByDNIAndInvoice);

export default router;
