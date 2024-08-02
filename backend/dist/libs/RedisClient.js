"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ioredis = _interopRequireDefault(require("ioredis"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var redis = new _ioredis["default"]({
  host: process.env.REDISHOST,
  // Se cambia esto si estás usando un servicio de Redis en la nube...
  port: process.env.REDIS_PORT // Puerto por defecto de Redis...
  // password: process.env.REDIS_PASSWORD,
});
redis.on('error', function (err) {
  console.error('Redis connection error...!');
});
var _default = exports["default"] = redis;