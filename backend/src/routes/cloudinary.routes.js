import { uploadImage,parser } from "../controllers/cloudinary.controller";
import { Router } from 'express';
import { TokenValidation } from '../authentication/tokens/verifyToken'; 

const router = Router();

router.post('/upload',parser, uploadImage);


export default router;
