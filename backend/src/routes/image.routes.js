<<<<<<< HEAD
import { Router } from 'express';
import { getRefuelingImageByDNIAndInvoice } from '../controllers/images.controller';

const router = Router();

router.get('/image/:cedula/:recibo', getRefuelingImageByDNIAndInvoice);
=======
import { Router } from "express";
import { getRefuelingImageByDNIAndInvoice } from "../controllers/images.controller";

const router = Router();

router.get("/image/:cedula/:recibo", getRefuelingImageByDNIAndInvoice);
>>>>>>> origin/Dianis2

export default router;
