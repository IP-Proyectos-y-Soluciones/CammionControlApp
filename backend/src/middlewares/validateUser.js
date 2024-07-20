import { body, validationResult } from 'express-validator';

export const validateUser = [
  body('usuario')
    .notEmpty()
    .withMessage('El nombre de usuario es requerido...'),
  body('password')
    .notEmpty()
    .withMessage('El password es requerido...'),
  body('roles')
    .isIn(['Admin', 'Empleado', 'Empresa'])
    .withMessage('Rol inválido...'),
  body('estado')
    .isBoolean()
    .withMessage('Estado inválido...'),
  body('personaId')
    .isMongoId()
    .withMessage('ID de persona inválido...'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }

    next();
  },
];
