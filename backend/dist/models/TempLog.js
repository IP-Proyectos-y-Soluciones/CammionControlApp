'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;
var mongoose = require('mongoose');
var logSchema = new mongoose.Schema(
    {
        seeker: {
            type: Number,
            default: 1,
        },
        loginStatus: {
            type: Boolean,
            require: true,
            default: false,
        },
    },
    {
        timestamps: true,
        autoCreate: true,
    },
);
var TempLog = mongoose.model('TempLog', logSchema);
var _default = (exports['default'] = TempLog);
