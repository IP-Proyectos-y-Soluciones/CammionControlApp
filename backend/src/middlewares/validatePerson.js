import { body, validationResult } from 'express-validator';

export const validatePerson = [
    body('cedula')
        .isInt({ min: 100000 })
        .withMessage(
            'Cedula debe ser un número entero positivo, de al menos 6 dígitos',
        )
        .notEmpty()
        .withMessage('Cedula es obligatorio'),
    body('nombres')
        .isString()
        .withMessage('Nombres debe ser una cadena de texto')
        .notEmpty()
        .withMessage('El(los) nombre(s) es(son) obligatorio(s)'),
    body('apellidos')
        .isString()
        .withMessage('Nombres debe ser una cadena de texto')
        .notEmpty()
        .withMessage('El(los) apellido(s) es(son) obligatorio(s)'),
    body('fecha_nacimiento')
        .isDate()
        .withMessage('Fecha de nacimiento debe ser una fecha válida')
        .notEmpty()
        .withMessage('Fecha de nacimiento es obligatoria'),
    body('correo')
        .isEmail()
        .withMessage('Correo debe ser un email válido')
        .notEmpty()
        .withMessage('Correo es obligatorio'),
    body('telefono')
        .isString()
        .withMessage('Teléfono debe ser una cadena de texto')
        .notEmpty()
        .withMessage('Teléfono es obligatorio'),
    body('fecha_inicio_contrato')
        .isDate()
        .withMessage('Fecha de inicio del contrato debe ser una fecha válida')
        .notEmpty()
        .withMessage('Fecha de inicio del contrato es obligatoria'),
    body('fecha_final_contrato')
        .optional()
        .isDate()
        .withMessage('Fecha final del contrato debe ser una fecha válida'),
    body('tipo_de_contrato')
        .isIn(['Fijo', 'Indefinido'])
        .withMessage('Tipo de contrato debe ser "Fijo" o "Indefinido"')
        .notEmpty()
        .withMessage('Tipo de contrato es obligatorio'),
    body('Usuario')
        .optional()
        .isMongoId()
        .withMessage('Usuario debe ser un ID válido de MongoDB'),
    body('vehiculos')
        .optional()
        .isArray()
        .withMessage('Vehiculos debe ser un array de IDs de MongoDB'),
    body('vehiculos.*')
        .isMongoId()
        .withMessage('Cada vehiculo debe ser un ID válido de MongoDB'),
    body('licencias')
        .optional()
        .isArray()
        .withMessage('Licencias debe ser un array de IDs de MongoDB'),
    body('licencias.*')
        .isMongoId()
        .withMessage('Cada licencia debe ser un ID válido de MongoDB'),
    body('volquetas')
        .optional()
        .isArray()
        .withMessage('Volquetas debe ser un array de IDs de MongoDB'),
    body('volquetas.*')
        .isMongoId()
        .withMessage('Cada volqueta debe ser un ID válido de MongoDB'),
    body('tanqueos')
        .optional()
        .isArray()
        .withMessage('Tanqueos debe ser un array de IDs de MongoDB'),
    body('tanqueos.*')
        .isMongoId()
        .withMessage('Cada tanqueo debe ser un ID válido de MongoDB'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
