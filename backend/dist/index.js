"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _app = _interopRequireDefault(require("./app.js"));
var _db = require("./config/db.js");
(0, _db.startConnection)();
function main() {
  return _main.apply(this, arguments);
}
function _main() {
  _main = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var appListener;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          try {
            // await startConnection();
            // console.log('Database connected...');
            appListener = _app["default"].listen(_app["default"].get('port'), function () {
              console.log("Server is running on port: ".concat(_app["default"].get('port')));
            }); // Apagado satisfactorio con SIGINT o SIGTERM...
            process.on('SIGINT', function () {
              console.log('Received SIGINT signal, shutting down...');
              appListener.close();
            });
          } catch (error) {
            console.error(error);
          }
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}
main();