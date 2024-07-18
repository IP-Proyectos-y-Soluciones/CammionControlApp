"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putVolqueta = exports.getVolqueta = exports.deleteVolqueta = exports.createVolqueta = void 0;
var _Volqueta = _interopRequireDefault(require("../models/Volqueta"));
var _Persona = _interopRequireDefault(require("../models/Persona"));
var _Vehiculo = _interopRequireDefault(require("../models/Vehiculo"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var createVolqueta = exports.createVolqueta = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, n_planilla, fecha, placas, conductor_id, cliente, volmts3, n_viajes, material, hora_inicio, hora_final, km_inicial, km_final, lugar_de_cargue, lugar_de_descargue, observacion, persona, vehiculo_id, total_horas, start, end, total_km_dia, newVolqueta;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, n_planilla = _req$body.n_planilla, fecha = _req$body.fecha, placas = _req$body.placas, conductor_id = _req$body.conductor_id, cliente = _req$body.cliente, volmts3 = _req$body.volmts3, n_viajes = _req$body.n_viajes, material = _req$body.material, hora_inicio = _req$body.hora_inicio, hora_final = _req$body.hora_final, km_inicial = _req$body.km_inicial, km_final = _req$body.km_final, lugar_de_cargue = _req$body.lugar_de_cargue, lugar_de_descargue = _req$body.lugar_de_descargue, observacion = _req$body.observacion;
          _context.next = 4;
          return _Persona["default"].findById(conductor_id);
        case 4:
          persona = _context.sent;
          if (persona) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: "El id de la persona no existe"
          }));
        case 7:
          _context.next = 9;
          return _Vehiculo["default"].findById(placas);
        case 9:
          vehiculo_id = _context.sent;
          if (vehiculo_id) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: "Las placas del vehiculo no existen"
          }));
        case 12:
          total_horas = 0;
          if (hora_inicio && hora_final) {
            start = new Date(hora_inicio);
            end = new Date(hora_final);
            total_horas = (end - start) / (1000 * 60 * 60);
          }
          total_km_dia = km_final - km_inicial;
          newVolqueta = new _Volqueta["default"]({
            n_planilla: n_planilla,
            fecha: fecha,
            placas: placas,
            conductor: conductor_id,
            cliente: cliente,
            volmts3: volmts3,
            n_viajes: n_viajes,
            material: material,
            hora_inicio: hora_inicio,
            hora_final: hora_final,
            total_horas: total_horas,
            km_inicial: km_inicial,
            km_final: km_final,
            total_km_dia: total_km_dia,
            lugar_de_cargue: lugar_de_cargue,
            lugar_de_descargue: lugar_de_descargue,
            observacion: observacion
          });
          _context.next = 18;
          return newVolqueta.save();
        case 18:
          res.status(200).json({
            message: "El formulario fue guardado correctamente!",
            newVolqueta: newVolqueta
          });
          _context.next = 24;
          break;
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          res.status(500).json(_context.t0);
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 21]]);
  }));
  return function createVolqueta(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getVolqueta = exports.getVolqueta = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$query, n_planilla, conductor_id, placas, query, planilla;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$query = req.query, n_planilla = _req$query.n_planilla, conductor_id = _req$query.conductor_id, placas = _req$query.placas;
          query = {};
          if (n_planilla) query.n_planilla = n_planilla;
          if (conductor_id) query.conductor = conductor_id; // debe ser "conductor" en lugar de "conductor_id"
          if (placas) query.placas = placas;
          _context2.next = 8;
          return _Volqueta["default"].find(query).populate("conductor").populate("placas");
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
    var _req$body2, n_planilla, fecha, placas, conductor_id, cliente, volmts3, n_viajes, material, hora_inicio, hora_final, km_inicial, km_final, lugar_de_cargue, lugar_de_descargue, observacion, persona, vehiculo_id, total_horas, start, end, total_km_dia, planilla;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body2 = req.body, n_planilla = _req$body2.n_planilla, fecha = _req$body2.fecha, placas = _req$body2.placas, conductor_id = _req$body2.conductor_id, cliente = _req$body2.cliente, volmts3 = _req$body2.volmts3, n_viajes = _req$body2.n_viajes, material = _req$body2.material, hora_inicio = _req$body2.hora_inicio, hora_final = _req$body2.hora_final, km_inicial = _req$body2.km_inicial, km_final = _req$body2.km_final, lugar_de_cargue = _req$body2.lugar_de_cargue, lugar_de_descargue = _req$body2.lugar_de_descargue, observacion = _req$body2.observacion;
          _context3.next = 4;
          return _Persona["default"].findById(conductor_id);
        case 4:
          persona = _context3.sent;
          if (persona) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "El id de la persona no existe"
          }));
        case 7:
          _context3.next = 9;
          return _Vehiculo["default"].findById(placas);
        case 9:
          vehiculo_id = _context3.sent;
          if (vehiculo_id) {
            _context3.next = 12;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "Las placas del vehiculo no existen"
          }));
        case 12:
          total_horas = 0;
          if (hora_inicio && hora_final) {
            start = new Date(hora_inicio);
            end = new Date(hora_final);
            total_horas = (end - start) / (1000 * 60 * 60);
          }
          total_km_dia = km_final - km_inicial;
          _context3.next = 17;
          return _Volqueta["default"].findByIdAndUpdate(req.params.id, {
            n_planilla: n_planilla,
            fecha: fecha,
            placas: placas,
            conductor_id: conductor_id,
            cliente: cliente,
            volmts3: volmts3,
            n_viajes: n_viajes,
            material: material,
            hora_inicio: hora_inicio,
            hora_final: hora_final,
            total_horas: total_horas,
            km_inicial: km_inicial,
            km_final: km_final,
            total_km_dia: total_km_dia,
            lugar_de_cargue: lugar_de_cargue,
            lugar_de_descargue: lugar_de_descargue,
            observacion: observacion
          }, {
            "new": true
          });
        case 17:
          planilla = _context3.sent;
          if (planilla) {
            _context3.next = 20;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "Planilla no encontrada"
          }));
        case 20:
          res.status(200).json({
            message: "El formulario fue actualizado correctamente!",
            planilla: planilla
          });
          _context3.next = 26;
          break;
        case 23:
          _context3.prev = 23;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json(_context3.t0);
        case 26:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 23]]);
  }));
  return function putVolqueta(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteVolqueta = exports.deleteVolqueta = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var planilla;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _Volqueta["default"].findByIdAndDelete(req.params.id);
        case 3:
          planilla = _context4.sent;
          if (planilla) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "Planilla no encontrada"
          }));
        case 6:
          res.status(200).json({
            message: "La planilla ha sido eliminada correctamente!",
            planilla: planilla
          });
          _context4.next = 12;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json(_context4.t0);
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function deleteVolqueta(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();