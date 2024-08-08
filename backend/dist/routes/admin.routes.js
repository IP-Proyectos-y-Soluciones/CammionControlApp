"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _unlockUsers = require("../authentication/block_unlock/unlockUsers.controller");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import { TokenValidation } from '../authentication/tokens/verifyToken';

var router = (0, _express["default"])();
router.post('/unlock-user',
// TokenValidation,
_unlockUsers.unlockUser);
var _default = exports["default"] = router;