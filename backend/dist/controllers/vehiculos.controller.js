'use strict';

function _typeof(o) {
    '@babel/helpers - typeof';
    return (
        (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o) {
                      return typeof o;
                  }
                : function (o) {
                      return o &&
                          'function' == typeof Symbol &&
                          o.constructor === Symbol &&
                          o !== Symbol.prototype
                          ? 'symbol'
                          : typeof o;
                  }),
        _typeof(o)
    );
}
Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.updateVehiculo =
    exports.getVehiculoByPlaca =
    exports.getVehiculoById =
    exports.getAllVehiculos =
    exports.deleteVehiculo =
    exports.createVehiculo =
    exports.assignDriverToVehicle =
        void 0;
var _Vehiculo = _interopRequireDefault(require('../models/Vehiculo'));
var _Persona = _interopRequireDefault(require('../models/Persona'));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
}
function _regeneratorRuntime() {
    'use strict';
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
        function _regeneratorRuntime() {
            return e;
        };
    var t,
        e = {},
        r = Object.prototype,
        n = r.hasOwnProperty,
        o =
            Object.defineProperty ||
            function (t, e, r) {
                t[e] = r.value;
            },
        i = 'function' == typeof Symbol ? Symbol : {},
        a = i.iterator || '@@iterator',
        c = i.asyncIterator || '@@asyncIterator',
        u = i.toStringTag || '@@toStringTag';
    function define(t, e, r) {
        return (
            Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
            }),
            t[e]
        );
    }
    try {
        define({}, '');
    } catch (t) {
        define = function define(t, e, r) {
            return (t[e] = r);
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator,
            a = Object.create(i.prototype),
            c = new Context(n || []);
        return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return { type: 'normal', arg: t.call(e, r) };
        } catch (t) {
            return { type: 'throw', arg: t };
        }
    }
    e.wrap = wrap;
    var h = 'suspendedStart',
        l = 'suspendedYield',
        f = 'executing',
        s = 'completed',
        y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
        return this;
    });
    var d = Object.getPrototypeOf,
        v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g =
        (GeneratorFunctionPrototype.prototype =
        Generator.prototype =
            Object.create(p));
    function defineIteratorMethods(t) {
        ['next', 'throw', 'return'].forEach(function (e) {
            define(t, e, function (t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ('throw' !== c.type) {
                var u = c.arg,
                    h = u.value;
                return h && 'object' == _typeof(h) && n.call(h, '__await')
                    ? e.resolve(h.__await).then(
                          function (t) {
                              invoke('next', t, i, a);
                          },
                          function (t) {
                              invoke('throw', t, i, a);
                          },
                      )
                    : e.resolve(h).then(
                          function (t) {
                              (u.value = t), i(u);
                          },
                          function (t) {
                              return invoke('throw', t, i, a);
                          },
                      );
            }
            a(c.arg);
        }
        var r;
        o(this, '_invoke', {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function (e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return (r = r
                    ? r.then(
                          callInvokeWithMethodAndArg,
                          callInvokeWithMethodAndArg,
                      )
                    : callInvokeWithMethodAndArg());
            },
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function (i, a) {
            if (o === f) throw Error('Generator is already running');
            if (o === s) {
                if ('throw' === i) throw a;
                return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                    if (o === h) throw ((o = s), n.arg);
                    n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ('normal' === p.type) {
                    if (((o = n.done ? s : l), p.arg === y)) continue;
                    return { value: p.arg, done: n.done };
                }
                'throw' === p.type &&
                    ((o = s), (n.method = 'throw'), (n.arg = p.arg));
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method,
            o = e.iterator[n];
        if (o === t)
            return (
                (r.delegate = null),
                ('throw' === n &&
                    e.iterator['return'] &&
                    ((r.method = 'return'),
                    (r.arg = t),
                    maybeInvokeDelegate(e, r),
                    'throw' === r.method)) ||
                    ('return' !== n &&
                        ((r.method = 'throw'),
                        (r.arg = new TypeError(
                            "The iterator does not provide a '" +
                                n +
                                "' method",
                        )))),
                y
            );
        var i = tryCatch(o, e.iterator, r.arg);
        if ('throw' === i.type)
            return (
                (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y
            );
        var a = i.arg;
        return a
            ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              y);
    }
    function pushTryEntry(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        (e.type = 'normal'), delete e.arg, (t.completion = e);
    }
    function Context(t) {
        (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(pushTryEntry, this),
            this.reset(!0);
    }
    function values(e) {
        if (e || '' === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1,
                    i = function next() {
                        for (; ++o < e.length; )
                            if (n.call(e, o))
                                return (
                                    (next.value = e[o]), (next.done = !1), next
                                );
                        return (next.value = t), (next.done = !0), next;
                    };
                return (i.next = i);
            }
        }
        throw new TypeError(_typeof(e) + ' is not iterable');
    }
    return (
        (GeneratorFunction.prototype = GeneratorFunctionPrototype),
        o(g, 'constructor', {
            value: GeneratorFunctionPrototype,
            configurable: !0,
        }),
        o(GeneratorFunctionPrototype, 'constructor', {
            value: GeneratorFunction,
            configurable: !0,
        }),
        (GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            u,
            'GeneratorFunction',
        )),
        (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
                !!e &&
                (e === GeneratorFunction ||
                    'GeneratorFunction' === (e.displayName || e.name))
            );
        }),
        (e.mark = function (t) {
            return (
                Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                    : ((t.__proto__ = GeneratorFunctionPrototype),
                      define(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(g)),
                t
            );
        }),
        (e.awrap = function (t) {
            return { __await: t };
        }),
        defineIteratorMethods(AsyncIterator.prototype),
        define(AsyncIterator.prototype, c, function () {
            return this;
        }),
        (e.AsyncIterator = AsyncIterator),
        (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new AsyncIterator(wrap(t, r, n, o), i);
            return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                      return t.done ? t.value : a.next();
                  });
        }),
        defineIteratorMethods(g),
        define(g, u, 'Generator'),
        define(g, a, function () {
            return this;
        }),
        define(g, 'toString', function () {
            return '[object Generator]';
        }),
        (e.keys = function (t) {
            var e = Object(t),
                r = [];
            for (var n in e) r.push(n);
            return (
                r.reverse(),
                function next() {
                    for (; r.length; ) {
                        var t = r.pop();
                        if (t in e)
                            return (next.value = t), (next.done = !1), next;
                    }
                    return (next.done = !0), next;
                }
            );
        }),
        (e.values = values),
        (Context.prototype = {
            constructor: Context,
            reset: function reset(e) {
                if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = t),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = 'next'),
                    (this.arg = t),
                    this.tryEntries.forEach(resetTryEntry),
                    !e)
                )
                    for (var r in this)
                        't' === r.charAt(0) &&
                            n.call(this, r) &&
                            !isNaN(+r.slice(1)) &&
                            (this[r] = t);
            },
            stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
            },
            dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                    return (
                        (a.type = 'throw'),
                        (a.arg = e),
                        (r.next = n),
                        o && ((r.method = 'next'), (r.arg = t)),
                        !!o
                    );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o],
                        a = i.completion;
                    if ('root' === i.tryLoc) return handle('end');
                    if (i.tryLoc <= this.prev) {
                        var c = n.call(i, 'catchLoc'),
                            u = n.call(i, 'finallyLoc');
                        if (c && u) {
                            if (this.prev < i.catchLoc)
                                return handle(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc)
                                return handle(i.finallyLoc);
                        } else if (c) {
                            if (this.prev < i.catchLoc)
                                return handle(i.catchLoc, !0);
                        } else {
                            if (!u)
                                throw Error(
                                    'try statement without catch or finally',
                                );
                            if (this.prev < i.finallyLoc)
                                return handle(i.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (
                        o.tryLoc <= this.prev &&
                        n.call(o, 'finallyLoc') &&
                        this.prev < o.finallyLoc
                    ) {
                        var i = o;
                        break;
                    }
                }
                i &&
                    ('break' === t || 'continue' === t) &&
                    i.tryLoc <= e &&
                    e <= i.finallyLoc &&
                    (i = null);
                var a = i ? i.completion : {};
                return (
                    (a.type = t),
                    (a.arg = e),
                    i
                        ? ((this.method = 'next'),
                          (this.next = i.finallyLoc),
                          y)
                        : this.complete(a)
                );
            },
            complete: function complete(t, e) {
                if ('throw' === t.type) throw t.arg;
                return (
                    'break' === t.type || 'continue' === t.type
                        ? (this.next = t.arg)
                        : 'return' === t.type
                          ? ((this.rval = this.arg = t.arg),
                            (this.method = 'return'),
                            (this.next = 'end'))
                          : 'normal' === t.type && e && (this.next = e),
                    y
                );
            },
            finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t)
                        return (
                            this.complete(r.completion, r.afterLoc),
                            resetTryEntry(r),
                            y
                        );
                }
            },
            catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ('throw' === n.type) {
                            var o = n.arg;
                            resetTryEntry(r);
                        }
                        return o;
                    }
                }
                throw Error('illegal catch attempt');
            },
            delegateYield: function delegateYield(e, r, n) {
                return (
                    (this.delegate = {
                        iterator: values(e),
                        resultName: r,
                        nextLoc: n,
                    }),
                    'next' === this.method && (this.arg = t),
                    y
                );
            },
        }),
        e
    );
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c),
            u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function () {
        var t = this,
            e = arguments;
        return new Promise(function (r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, 'next', n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, 'throw', n);
            }
            _next(void 0);
        });
    };
}
// Crear un nuevo vehiculo
var createVehiculo = (exports.createVehiculo = /*#__PURE__*/ (function () {
    var _ref = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(req, res) {
            var _req$body,
                placa,
                tipo_de_combustible,
                clase_de_vehiculo,
                marca,
                color,
                vehiculo,
                newVehicle,
                savedVehicle;
            return _regeneratorRuntime().wrap(
                function _callee$(_context) {
                    while (1)
                        switch ((_context.prev = _context.next)) {
                            case 0:
                                (_req$body = req.body),
                                    (placa = _req$body.placa),
                                    (tipo_de_combustible =
                                        _req$body.tipo_de_combustible),
                                    (clase_de_vehiculo =
                                        _req$body.clase_de_vehiculo),
                                    (marca = _req$body.marca),
                                    (color = _req$body.color);
                                vehiculo = new _Vehiculo['default']({
                                    placa: placa,
                                    tipo_de_combustible: tipo_de_combustible,
                                    clase_de_vehiculo: clase_de_vehiculo,
                                    marca: marca,
                                    color: color,
                                });
                                _context.prev = 2;
                                newVehicle = new _Vehiculo['default']({
                                    placa: placa,
                                    tipo_de_combustible: tipo_de_combustible,
                                    clase_de_vehiculo: clase_de_vehiculo,
                                    marca: marca,
                                    color: color,
                                });
                                _context.next = 6;
                                return newVehicle.save();
                            case 6:
                                savedVehicle = _context.sent;
                                // await vehiculo.save();
                                // res.status(201).json({
                                //     message: 'Registro de vehiculo exitoso',
                                //     data: vehiculo,
                                // });

                                res.status(201).json({
                                    message: 'Registro de vehiculo exitoso',
                                    savedVehicle: savedVehicle,
                                });
                                _context.next = 18;
                                break;
                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](2);
                                // res.status(400).json(error);
                                console.log(_context.t0);
                                if (!(_context.t0 instanceof Error)) {
                                    _context.next = 17;
                                    break;
                                }
                                return _context.abrupt(
                                    'return',
                                    res.status(500).json({
                                        error: _context.t0.message,
                                    }),
                                );
                            case 17:
                                return _context.abrupt(
                                    'return',
                                    res.status(500).json(_context.t0),
                                );
                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                },
                _callee,
                null,
                [[2, 10]],
            );
        }),
    );
    return function createVehiculo(_x, _x2) {
        return _ref.apply(this, arguments);
    };
})());

// Obtener todos los vehiculos
var getAllVehiculos = (exports.getAllVehiculos = /*#__PURE__*/ (function () {
    var _ref2 = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(req, res) {
            var vehiculos;
            return _regeneratorRuntime().wrap(
                function _callee2$(_context2) {
                    while (1)
                        switch ((_context2.prev = _context2.next)) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return _Vehiculo['default'].find();
                            case 3:
                                vehiculos = _context2.sent;
                                res.status(200).json(vehiculos);
                                _context2.next = 10;
                                break;
                            case 7:
                                _context2.prev = 7;
                                _context2.t0 = _context2['catch'](0);
                                res.status(500).json(_context2.t0);
                            case 10:
                            case 'end':
                                return _context2.stop();
                        }
                },
                _callee2,
                null,
                [[0, 7]],
            );
        }),
    );
    return function getAllVehiculos(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
})());

// Obtener vehiculo por ID
var getVehiculoById = (exports.getVehiculoById = /*#__PURE__*/ (function () {
    var _ref3 = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(req, res) {
            var id, vehiculo;
            return _regeneratorRuntime().wrap(
                function _callee3$(_context3) {
                    while (1)
                        switch ((_context3.prev = _context3.next)) {
                            case 0:
                                id = req.params.id;
                                _context3.prev = 1;
                                _context3.next = 4;
                                return _Vehiculo['default'].findById(id);
                            case 4:
                                vehiculo = _context3.sent;
                                if (vehiculo) {
                                    _context3.next = 7;
                                    break;
                                }
                                return _context3.abrupt(
                                    'return',
                                    res.status(404).send('ID no encontrado'),
                                );
                            case 7:
                                res.status(200).json({
                                    message: 'Búsqueda por ID exitosa',
                                    data: vehiculo,
                                });
                                _context3.next = 13;
                                break;
                            case 10:
                                _context3.prev = 10;
                                _context3.t0 = _context3['catch'](1);
                                res.status(500).json(_context3.t0);
                            case 13:
                            case 'end':
                                return _context3.stop();
                        }
                },
                _callee3,
                null,
                [[1, 10]],
            );
        }),
    );
    return function getVehiculoById(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
})());

// Obtener vehículo por placa...
var getVehiculoByPlaca = (exports.getVehiculoByPlaca =
    /*#__PURE__*/ (function () {
        var _ref4 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(
                function _callee4(req, res) {
                    var placa, vehiculo;
                    return _regeneratorRuntime().wrap(
                        function _callee4$(_context4) {
                            while (1)
                                switch ((_context4.prev = _context4.next)) {
                                    case 0:
                                        placa = req.params.placa;
                                        _context4.prev = 1;
                                        _context4.next = 4;
                                        return _Vehiculo['default'].findOne({
                                            placa: placa,
                                        });
                                    case 4:
                                        vehiculo = _context4.sent;
                                        if (vehiculo) {
                                            _context4.next = 7;
                                            break;
                                        }
                                        return _context4.abrupt(
                                            'return',
                                            res.status(404).json({
                                                message:
                                                    'El veh\xEDculo con placas: '.concat(
                                                        placa,
                                                        ' no se encuentra o no est\xE1 registrado...!',
                                                    ),
                                            }),
                                        );
                                    case 7:
                                        return _context4.abrupt(
                                            'return',
                                            res.status(200).json({
                                                message: 'Vehículo encontrado:',
                                                vehiculo: vehiculo,
                                            }),
                                        );
                                    case 10:
                                        _context4.prev = 10;
                                        _context4.t0 = _context4['catch'](1);
                                        if (!(_context4.t0 instanceof Error)) {
                                            _context4.next = 16;
                                            break;
                                        }
                                        return _context4.abrupt(
                                            'return',
                                            res.status(500).json({
                                                error: _context4.t0.message,
                                            }),
                                        );
                                    case 16:
                                        return _context4.abrupt(
                                            'return',
                                            res.status(500).json(_context4.t0),
                                        );
                                    case 17:
                                    case 'end':
                                        return _context4.stop();
                                }
                        },
                        _callee4,
                        null,
                        [[1, 10]],
                    );
                },
            ),
        );
        return function getVehiculoByPlaca(_x7, _x8) {
            return _ref4.apply(this, arguments);
        };
    })());

// Asignar conductor a un vehículo determinado...
var assignDriverToVehicle = (exports.assignDriverToVehicle =
    /*#__PURE__*/ (function () {
        var _ref5 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(
                function _callee5(req, res) {
                    var _req$body2,
                        cedula,
                        placa,
                        verifyDriver,
                        verifyVehicle,
                        updateData,
                        assignDriver,
                        updateDataDriver;
                    return _regeneratorRuntime().wrap(
                        function _callee5$(_context5) {
                            while (1)
                                switch ((_context5.prev = _context5.next)) {
                                    case 0:
                                        (_req$body2 = req.body),
                                            (cedula = _req$body2.cedula),
                                            (placa = _req$body2.placa);
                                        _context5.prev = 1;
                                        _context5.next = 4;
                                        return _Persona['default'].findOne({
                                            cedula: cedula,
                                        });
                                    case 4:
                                        verifyDriver = _context5.sent;
                                        _context5.next = 7;
                                        return _Vehiculo['default'].findOne({
                                            placa: placa,
                                        });
                                    case 7:
                                        verifyVehicle = _context5.sent;
                                        if (
                                            !(!verifyDriver || !verifyVehicle)
                                        ) {
                                            _context5.next = 10;
                                            break;
                                        }
                                        return _context5.abrupt(
                                            'return',
                                            res.status(404).json({
                                                message:
                                                    'Este conductor (o vehículo) no se encuentra(n) registrado(s)...!',
                                            }),
                                        );
                                    case 10:
                                        updateData = {
                                            persona_cedula: verifyDriver.cedula,
                                            propietario: verifyDriver._id,
                                        };
                                        _context5.next = 13;
                                        return _Vehiculo[
                                            'default'
                                        ].findOneAndUpdate(
                                            verifyVehicle._id,
                                            {
                                                $set: updateData,
                                            },
                                            {
                                                new: true,
                                            },
                                        );
                                    case 13:
                                        assignDriver = _context5.sent;
                                        updateDataDriver = {
                                            vehiculos: verifyVehicle._id,
                                        };
                                        _context5.next = 17;
                                        return _Persona[
                                            'default'
                                        ].findOneAndUpdate(
                                            verifyDriver._id,
                                            {
                                                $set: updateDataDriver,
                                            },
                                            {
                                                new: true,
                                            },
                                        );
                                    case 17:
                                        return _context5.abrupt(
                                            'return',
                                            res.status(201).json({
                                                message:
                                                    'Asignación de vehículo exitosa...!!!',
                                                assignDriver: assignDriver,
                                            }),
                                        );
                                    case 20:
                                        _context5.prev = 20;
                                        _context5.t0 = _context5['catch'](1);
                                        if (!(_context5.t0 instanceof Error)) {
                                            _context5.next = 26;
                                            break;
                                        }
                                        return _context5.abrupt(
                                            'return',
                                            res.status(500).json({
                                                error: _context5.t0.message,
                                            }),
                                        );
                                    case 26:
                                        return _context5.abrupt(
                                            'return',
                                            res.status(500).json(_context5.t0),
                                        );
                                    case 27:
                                    case 'end':
                                        return _context5.stop();
                                }
                        },
                        _callee5,
                        null,
                        [[1, 20]],
                    );
                },
            ),
        );
        return function assignDriverToVehicle(_x9, _x10) {
            return _ref5.apply(this, arguments);
        };
    })());

// Actualizar un vehiculo por ID
var updateVehiculo = (exports.updateVehiculo = /*#__PURE__*/ (function () {
    var _ref6 = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee6(req, res) {
            var id,
                _req$body3,
                placa,
                tipo_de_combustible,
                clase_de_vehiculo,
                marca,
                color,
                propietario,
                documentos,
                volquetas,
                tanqueos,
                updates,
                vehiculo;
            return _regeneratorRuntime().wrap(
                function _callee6$(_context6) {
                    while (1)
                        switch ((_context6.prev = _context6.next)) {
                            case 0:
                                id = req.params.id;
                                (_req$body3 = req.body),
                                    (placa = _req$body3.placa),
                                    (tipo_de_combustible =
                                        _req$body3.tipo_de_combustible),
                                    (clase_de_vehiculo =
                                        _req$body3.clase_de_vehiculo),
                                    (marca = _req$body3.marca),
                                    (color = _req$body3.color),
                                    (propietario = _req$body3.propietario),
                                    (documentos = _req$body3.documentos),
                                    (volquetas = _req$body3.volquetas),
                                    (tanqueos = _req$body3.tanqueos);
                                updates = {
                                    placa: placa,
                                    tipo_de_combustible: tipo_de_combustible,
                                    clase_de_vehiculo: clase_de_vehiculo,
                                    marca: marca,
                                    color: color,
                                    propietario: propietario,
                                    documentos: documentos,
                                    volquetas: volquetas,
                                    tanqueos: tanqueos,
                                }; // Filtrar las propiedades no definidas
                                Object.keys(updates).forEach(function (key) {
                                    return (
                                        updates[key] === undefined &&
                                        delete updates[key]
                                    );
                                });
                                _context6.prev = 4;
                                _context6.next = 7;
                                return _Vehiculo['default'].findByIdAndUpdate(
                                    id,
                                    updates,
                                    {
                                        new: true,
                                        runValidators: true,
                                    },
                                );
                            case 7:
                                vehiculo = _context6.sent;
                                if (vehiculo) {
                                    _context6.next = 10;
                                    break;
                                }
                                return _context6.abrupt(
                                    'return',
                                    res
                                        .status(404)
                                        .send(
                                            'No se pudo encontrar el ID para actualizar',
                                        ),
                                );
                            case 10:
                                res.status(200).json({
                                    message: 'Actualizado exitosamente',
                                    data: vehiculo,
                                });
                                _context6.next = 16;
                                break;
                            case 13:
                                _context6.prev = 13;
                                _context6.t0 = _context6['catch'](4);
                                res.status(400).json(_context6.t0);
                            case 16:
                            case 'end':
                                return _context6.stop();
                        }
                },
                _callee6,
                null,
                [[4, 13]],
            );
        }),
    );
    return function updateVehiculo(_x11, _x12) {
        return _ref6.apply(this, arguments);
    };
})());

// Eliminar un vehiculo por ID
var deleteVehiculo = (exports.deleteVehiculo = /*#__PURE__*/ (function () {
    var _ref7 = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee7(req, res) {
            var id, vehiculo;
            return _regeneratorRuntime().wrap(
                function _callee7$(_context7) {
                    while (1)
                        switch ((_context7.prev = _context7.next)) {
                            case 0:
                                id = req.params.id;
                                _context7.prev = 1;
                                _context7.next = 4;
                                return _Vehiculo['default'].findByIdAndDelete(
                                    id,
                                );
                            case 4:
                                vehiculo = _context7.sent;
                                if (vehiculo) {
                                    _context7.next = 7;
                                    break;
                                }
                                return _context7.abrupt(
                                    'return',
                                    res
                                        .status(404)
                                        .send(
                                            'No se pudo encontrar el ID del vehiculo',
                                        ),
                                );
                            case 7:
                                res.status(200).json({
                                    message:
                                        id + ' se ha eliminado exitosamente',
                                    data: vehiculo,
                                });
                                _context7.next = 13;
                                break;
                            case 10:
                                _context7.prev = 10;
                                _context7.t0 = _context7['catch'](1);
                                res.status(500).json(_context7.t0);
                            case 13:
                            case 'end':
                                return _context7.stop();
                        }
                },
                _callee7,
                null,
                [[1, 10]],
            );
        }),
    );
    return function deleteVehiculo(_x13, _x14) {
        return _ref7.apply(this, arguments);
    };
})());
