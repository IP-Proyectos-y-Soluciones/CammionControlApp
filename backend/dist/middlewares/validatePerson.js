"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePerson = void 0;
var _expressValidator = require("express-validator");
var validatePerson = exports.validatePerson = [(0, _expressValidator.body)('cedula').isInt({
  min: 100000
}).withMessage('Cedula debe ser un número entero positivo, de al menos 6 dígitos').notEmpty().withMessage('Cedula es obligatorio'), (0, _expressValidator.body)('nombres').isString().withMessage('Nombres debe ser una cadena de texto').notEmpty().withMessage('El(los) nombre(s) es(son) obligatorio(s)'), (0, _expressValidator.body)('apellidos').isString().withMessage('Nombres debe ser una cadena de texto').notEmpty().withMessage('El(los) apellido(s) es(son) obligatorio(s)'), (0, _expressValidator.body)('fecha_nacimiento').isDate().withMessage('Fecha de nacimiento debe ser una fecha válida').notEmpty().withMessage('Fecha de nacimiento es obligatoria'), (0, _expressValidator.body)('correo').isEmail().withMessage('Correo debe ser un email válido').notEmpty().withMessage('Correo es obligatorio'), (0, _expressValidator.body)('telefono').isString().withMessage('Teléfono debe ser una cadena de texto').notEmpty().withMessage('Teléfono es obligatorio'), (0, _expressValidator.body)('fecha_inicio_contrato').isDate().withMessage('Fecha de inicio del contrato debe ser una fecha válida').notEmpty().withMessage('Fecha de inicio del contrato es obligatoria'), (0, _expressValidator.body)('fecha_final_contrato').optional().isDate().withMessage('Fecha final del contrato debe ser una fecha válida'), (0, _expressValidator.body)('tipo_de_contrato').isIn(['Fijo', 'Indefinido']).withMessage('Tipo de contrato debe ser "Fijo" o "Indefinido"').notEmpty().withMessage('Tipo de contrato es obligatorio'), (0, _expressValidator.body)('Usuario').optional().isMongoId().withMessage('Usuario debe ser un ID válido de MongoDB'), (0, _expressValidator.body)('vehiculos').optional().isArray().withMessage('Vehiculos debe ser un array de IDs de MongoDB'), (0, _expressValidator.body)('vehiculos.*').isMongoId().withMessage('Cada vehiculo debe ser un ID válido de MongoDB'), (0, _expressValidator.body)('licencias').optional().isArray().withMessage('Licencias debe ser un array de IDs de MongoDB'), (0, _expressValidator.body)('licencias.*').isMongoId().withMessage('Cada licencia debe ser un ID válido de MongoDB'), (0, _expressValidator.body)('volquetas').optional().isArray().withMessage('Volquetas debe ser un array de IDs de MongoDB'), (0, _expressValidator.body)('volquetas.*').isMongoId().withMessage('Cada volqueta debe ser un ID válido de MongoDB'), (0, _expressValidator.body)('tanqueos').optional().isArray().withMessage('Tanqueos debe ser un array de IDs de MongoDB'), (0, _expressValidator.body)('tanqueos.*').isMongoId().withMessage('Cada tanqueo debe ser un ID válido de MongoDB'), function (req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  next();
}];