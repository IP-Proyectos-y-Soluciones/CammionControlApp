"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putVolqueta = exports.getVolqueta = exports.deleteVolqueta = exports.createVolqueta = void 0;
var _Volqueta = _interopRequireDefault(require("../models/Volqueta"));
var _Persona = _interopRequireDefault(require("../models/Persona"));
var _Vehiculo = _interopRequireDefault(require("../models/Vehiculo"));
var _plantilla_volquetas = require("../pdf-excel/plantilla_volquetas");
var _generarNumeroPlanilla = require("../pdf-excel/generarNumeroPlanilla");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var createVolqueta = exports.createVolqueta = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, fecha, placa_vehiculo, cedula, cliente, volmts3, n_viajes, material, hora_inicio, hora_final, km_inicial, km_final, honorarios, lugar_de_cargue, lugar_de_descargue, observacion, generateCN, driver, vehicle, total_horas, startH, endH, horaTotal, start, end, timezoneOffset, total_km_dia, volquetaData, newVolqueta, volquetaCompleta;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, fecha = _req$body.fecha, placa_vehiculo = _req$body.placa_vehiculo, cedula = _req$body.cedula, cliente = _req$body.cliente, volmts3 = _req$body.volmts3, n_viajes = _req$body.n_viajes, material = _req$body.material, hora_inicio = _req$body.hora_inicio, hora_final = _req$body.hora_final, km_inicial = _req$body.km_inicial, km_final = _req$body.km_final, honorarios = _req$body.honorarios, lugar_de_cargue = _req$body.lugar_de_cargue, lugar_de_descargue = _req$body.lugar_de_descargue, observacion = _req$body.observacion;
          generateCN = (0, _generarNumeroPlanilla.generarNumeroPlanilla)(); // Genera el número de planilla
          _context.next = 5;
          return _Persona["default"].findOne({
            cedula: cedula
          });
        case 5:
          driver = _context.sent;
          if (driver) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: "El conductor con la c\xE9dula ".concat(cedula, " NO se encuentra registrado...!")
          }));
        case 8:
          _context.next = 10;
          return _Vehiculo["default"].findOne({
            placa: placa_vehiculo
          });
        case 10:
          vehicle = _context.sent;
          if (vehicle) {
            _context.next = 13;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: "El veh\xEDculo con placas ".concat(placa_vehiculo, " NO se encuentra registrado...!")
          }));
        case 13:
          total_horas = 0;
          horaTotal = 0;
          if (hora_inicio && hora_final) {
            start = new Date(hora_inicio);
            end = new Date(hora_final);
            timezoneOffset = new Date().getTimezoneOffset(); // Devuelve el offset en minutos...
            startH = new Date(start.getTime() - timezoneOffset * 60000);
            endH = new Date(end.getTime() - timezoneOffset * 60000);
            total_horas = (endH - startH) / (1000 * 60 * 60);
            horaTotal = total_horas.toFixed(2); // Asigna el valor calculado a horaTotal
          }
          total_km_dia = km_final - km_inicial;
          volquetaData = new _Volqueta["default"]({
            n_planilla: generateCN,
            fecha: fecha,
            placa_vehiculo: placa_vehiculo,
            placa: vehicle._id,
            conductor_cedula: cedula,
            conductor: driver._id,
            cliente: cliente,
            volmts3: volmts3,
            n_viajes: n_viajes,
            material: material,
            hora_inicio: startH,
            hora_final: endH,
            total_horas: horaTotal,
            km_inicial: km_inicial,
            km_final: km_final,
            total_km_dia: total_km_dia,
            honorarios: honorarios,
            lugar_de_cargue: lugar_de_cargue,
            lugar_de_descargue: lugar_de_descargue,
            observacion: observacion
          });
          _context.next = 20;
          return volquetaData.save();
        case 20:
          newVolqueta = _context.sent;
          _context.next = 23;
          return _Volqueta["default"].findById(newVolqueta._id).populate("conductor", "nombres apellidos").populate("placa", "placa");
        case 23:
          volquetaCompleta = _context.sent;
          console.log("Llamando a la función plantillaVolquetas con los datos:");
          console.log(volquetaCompleta);
          (0, _plantilla_volquetas.plantillaVolquetas)([volquetaCompleta], res);
          _context.next = 29;
          return _Persona["default"].findOneAndUpdate(driver._id,
          // { $set: updateDataDriver },
          {
            $push: {
              volquetas: newVolqueta._id
            }
          }, {
            "new": true
          });
        case 29:
          _context.next = 31;
          return _Vehiculo["default"].findOneAndUpdate(vehicle._id,
          // { $set: updateDataVehicle },
          {
            $push: {
              volquetas: newVolqueta._id
            }
          }, {
            "new": true
          });
        case 31:
          _context.next = 37;
          break;
        case 33:
          _context.prev = 33;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0.message);
          res.status(500).json({
            message: "Error al crear la planilla"
          });
        case 37:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 33]]);
  }));
  return function createVolqueta(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getVolqueta = exports.getVolqueta = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$query, n_planilla, conductor_cedula, placa_vehiculo, query, planilla;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$query = req.query, n_planilla = _req$query.n_planilla, conductor_cedula = _req$query.conductor_cedula, placa_vehiculo = _req$query.placa_vehiculo;
          query = {};
          if (n_planilla) query.n_planilla = n_planilla;
          if (conductor_cedula) query.conductor = conductor_cedula;
          if (placa_vehiculo) query.placa_vehiculo = placa_vehiculo;
          _context2.next = 8;
          return _Volqueta["default"].find(query).populate("conductor_cedula").populate("placa_vehiculo");
        case 8:
          planilla = _context2.sent;
          if (!(planilla.length === 0)) {
            _context2.next = 11;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "Planilla no encontrada"
          }));
        case 11:
          res.status(200).json({
            message: "Planilla encontrada",
            planilla: planilla
          });
          _context2.next = 17;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: "Error al obtener las planillas",
            error: _context2.t0.message
          });
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return function getVolqueta(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var putVolqueta = exports.putVolqueta = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var n_planilla, updateData, query, horaInicio, horaFinal, diferenciaHoras, kmInicial, kmFinal, totalKm, volquetaActualizada;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          n_planilla = req.params.n_planilla;
          updateData = req.body;
          query = {};
          console.log(req.params);
          if (!n_planilla) {
            _context3.next = 9;
            break;
          }
          query = {
            n_planilla: n_planilla
          };
          _context3.next = 10;
          break;
        case 9:
          return _context3.abrupt("return", res.status(400).json({
            message: "n_planilla es requerido"
          }));
        case 10:
          // Cálculo de total_horas si `hora_inicio` y `hora_final` están presentes
          if (updateData.hora_inicio && updateData.hora_final) {
            horaInicio = new Date(updateData.hora_inicio);
            horaFinal = new Date(updateData.hora_final);
            diferenciaHoras = (horaFinal - horaInicio) / (1000 * 60 * 60); // Convertir milisegundos a horas
            updateData.total_horas = diferenciaHoras.toFixed(2); // Guardar con dos decimales
          }

          // Cálculo de total_km_dia si `km_inicial` y `km_final` están presentes
          if (updateData.km_inicial && updateData.km_final) {
            kmInicial = parseFloat(updateData.km_inicial);
            kmFinal = parseFloat(updateData.km_final);
            totalKm = kmFinal - kmInicial;
            updateData.total_km_dia = totalKm;
          }

          // Buscar y actualizar el documento
          _context3.next = 14;
          return _Volqueta["default"].findOneAndUpdate(query, updateData, {
            "new": true,
            // Devuelve el documento actualizado
            runValidators: true // Ejecuta validaciones del modelo
          });
        case 14:
          volquetaActualizada = _context3.sent;
          if (volquetaActualizada) {
            _context3.next = 17;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "Volqueta no encontrada"
          }));
        case 17:
          console.log(volquetaActualizada);
          (0, _plantilla_volquetas.plantillaVolquetas)([volquetaActualizada]);

          // Responder con el documento actualizado
          res.status(200).json(volquetaActualizada);
          _context3.next = 25;
          break;
        case 22:
          _context3.prev = 22;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: "Error actualizando volqueta",
            error: _context3.t0.message
          });
        case 25:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 22]]);
  }));
  return function putVolqueta(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteVolqueta = exports.deleteVolqueta = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var n_planilla, query, planilla;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          n_planilla = req.params.n_planilla;
          query = {};
          console.log(n_planilla);
          if (!n_planilla) {
            _context4.next = 8;
            break;
          }
          query.n_planilla = n_planilla;
          _context4.next = 9;
          break;
        case 8:
          return _context4.abrupt("return", res.status(400).json({
            message: "Se requiere el n_planilla."
          }));
        case 9:
          _context4.next = 11;
          return _Volqueta["default"].findOneAndDelete(query);
        case 11:
          planilla = _context4.sent;
          if (planilla) {
            _context4.next = 14;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "Planilla no encontrada"
          }));
        case 14:
          res.status(200).json({
            message: "La planilla ha sido eliminada correctamente!",
            planilla: planilla
          });
          _context4.next = 20;
          break;
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](0);
          //res.status(500).json(error);
          console.log(_context4.t0.message);
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 17]]);
  }));
  return function deleteVolqueta(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();