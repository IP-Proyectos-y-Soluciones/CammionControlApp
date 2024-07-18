"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUser = void 0;
var _expressValidator = require("express-validator");
var validateUser = exports.validateUser = [(0, _expressValidator.body)('usuario').notEmpty().withMessage('El nombre de usuario es requerido...'), (0, _expressValidator.body)('password').notEmpty().withMessage('El password es requerido...'), (0, _expressValidator.body)('roles').isIn(['Admin', 'Empleado', 'Empresa']).withMessage('Rol inválido...'), (0, _expressValidator.body)('estado').isBoolean().withMessage('Estado inválido...'), (0, _expressValidator.body)('personaId').isMongoId().withMessage('ID de persona inválido...'), function (req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  next();
}];