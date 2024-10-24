import { Router } from 'express';
import {
    getRefuelingImageByDNIAndInvoice,
    getVolquetaImageByDNIAndInvoice,
} from '../controllers/images.controller';

const router = Router();

router.get('/image/:cedula/:recibo', getRefuelingImageByDNIAndInvoice);

router.get('/image-volq/:cedula/:recibo', getVolquetaImageByDNIAndInvoice);

export default router;
