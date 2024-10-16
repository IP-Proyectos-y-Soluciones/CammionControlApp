"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _unlockUsers = require("../authentication/disable_unlock/unlockUsers.controller");
var _disableUsers = require("../authentication/disable_unlock/disableUsers.controller");
var _auxAuthMiddleware = require("../middlewares/auxAuthMiddleware");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import { TokenValidation } from '../authentication/tokens/verifyToken';

var router = (0, _express["default"])();
router.post('/disable-user',
// TokenValidation, // Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Debe suprimirse para la producción...
_disableUsers.disableUser);
router.post('/unlock-user',
// TokenValidation, // Activar para la producción...
_auxAuthMiddleware.AuxAuthMiddleware,
// Debe suprimirse para la producción...
_unlockUsers.unlockUser);
var _default = exports["default"] = router;