import { Router } from 'express';
import {
    login,
    getDriverByDNI,
    getVehicleById,
} from '../authentication/login_out/login.controller';
import { logout } from '../authentication/login_out/logout.controller';
// import { TokenValidation } from '../authentication/tokens/verifyToken'; // Activar para la producción...
import { AuxAuthMiddleware } from '../middlewares/auxAuthMiddleware'; // Eliminar para prodcc...

const router = Router();

router.post('/login', login);

router.post('/logout', logout);

// router.get('/check', TokenValidation, (req, res) => {
//   res.json({ isAuthenticated: true });
// });

router.get('/checklogin', AuxAuthMiddleware, (req, res) => {
    res.json({
        isAuthenticated: true,
        user: {
            roles: req.session.roles,
        },
    });
});

// *********** || Rutas auxiliares para el Front... || ************ //

router.get(
    '/driverced/:cedula',
    // TokenValidation,
    getDriverByDNI,
);
router.get(
    '/vehicleid/:id',
    // TokenValidation,
    getVehicleById,
);

// ***************************************************** //

export default router;
