"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUser = void 0;
var _expressValidator = require("express-validator");
var validateUser = exports.validateUser = [(0, _expressValidator.body)('usuario_cedula').isInt({
  min: 100000
}).withMessage('Cedula debe ser un número entero positivo, de al menos 6 dígitos').notEmpty().withMessage('Cedula es obligatorio'), (0, _expressValidator.body)('usuario').notEmpty().withMessage('El nombre de usuario es requerido...'), (0, _expressValidator.body)('password').notEmpty().withMessage('El password es requerido...'), (0, _expressValidator.body)('roles').isIn(['Owner', 'Admin', 'Empleado', 'Empresa']).withMessage('Rol inválido...'), (0, _expressValidator.body)('estado').optional().isIn('Activo', 'Inactivo', 'Bloqueado').withMessage('Estado inválido...'), (0, _expressValidator.body)('logged').optional().isBoolean().withMessage('Debe ser un valor true o false...'),
// body('personaId')
//   .isMongoId()
//   .withMessage('ID de persona inválido...'),
function (req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  next();
}];