import { body, validationResult } from 'express-validator';

export const validateUser = [
    body('usuario_cedula')
        .isInt({ min: 100000 })
        .withMessage(
            'Cedula debe ser un número entero positivo, de al menos 6 dígitos',
        )
        .notEmpty()
        .withMessage('Cedula es obligatorio'),
    body('usuario')
        .notEmpty()
        .withMessage('El nombre de usuario es requerido...'),
    body('password').notEmpty().withMessage('El password es requerido...'),
    body('roles')
        .isIn(['Admin', 'Empleado', 'Empresa'])
        .withMessage('Rol inválido...'),
    body('estado')
        .optional()
        .isIn('Activo', 'Inactivo', 'Bloqueado')
        .withMessage('Estado inválido...'),
    body('logged')
        .optional()
        .isBoolean()
        .withMessage('Debe ser un valor true o false...'),
    // body('personaId')
    //   .isMongoId()
    //   .withMessage('ID de persona inválido...'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    },
];
