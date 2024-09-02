import csrf from 'csrf';
import Router from 'express';

const csrfProtection = new csrf();
const router = Router();

// Middleware para generar y enviar el token CSRF...
export const generateCsrfToken = (req, res, next) => {
    if (!req.cookies['csrf-secret']) {
        const secret = csrfProtection.secretSync();

        res.cookie('csrf-secret', secret, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            // partitioned: true,
        });
        // Se debe añadir esto, para que esté disponible en esta solicitud...
        req.cookies['csrf-secret'] = secret;
    }

    const csrfToken = csrfProtection.create(
        req.cookies['csrf-secret'] || csrfProtection.secretSync(),
    );

    res.cookie('csrf-token', csrfToken, {
        // httpOnly: true,
        Secure: true,
        SameSite: 'None',
        // partitioned: true,
    });

    res.locals.csrfToken = csrfToken;

    next();
};

// Middleware para verificar el token CSRF...
export const verifyCsrfToken = (req, res, next) => {
    // Se obtiene el token de los headers...
    const csrfToken = req.headers['csrf-token'];
    const csrfSecret = req.cookies['csrf-secret'];

    if (csrfProtection.verify(csrfSecret, csrfToken)) {
        next();
    } else {
        res.status(403).json({
            message: 'Token CSRF inválido o perdido...',
        });
    }
};

// Ruta para obtener el token CSRF...
router.get('/api/csrf-token', (req, res) => {
    res.json({ csrfToken: res.locals.csrfToken });
});

export const handleCsrfError = (err, req, res, next) => {
    if (err.code === 'EBADCSRFTOKEN') {
        // Manejo de error CSRF
        res.status(403).json({
            message: 'Token CSRF inválido o perdido...',
        });
    } else {
        next(err);
    }
};

export default router;
