import { uploadImage,parser,getImagesFromCloudinay,deleteImageById,getImageById,updateImageById } from "../controllers/cloudinary.controller";
import { Router } from 'express';
import { TokenValidation } from '../authentication/tokens/verifyToken'; 


const router = Router();

router.post('/upload',TokenValidation, parser, uploadImage);
router.get('/',TokenValidation, getImagesFromCloudinay);
router.delete('/delete/:id',TokenValidation,deleteImageById );
router.get('/:id',TokenValidation,getImageById );
router.put('/update/:id',TokenValidation,updateImageById );



export default router;
