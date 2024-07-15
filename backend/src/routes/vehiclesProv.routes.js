import { Router } from 'express';
import { TokenValidation } from '../authentication/tokens/verifyToken';
import { addNewVehicle } from '../controllers/vehiclesProv.controller';

const router = Router();

router.post('/addvehicle', TokenValidation, addNewVehicle);

export default router;
