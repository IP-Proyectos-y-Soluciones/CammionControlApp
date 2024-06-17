"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = exports.formatDate = void 0;
// Pre-save hook...

var formatDate = exports.formatDate = function formatDate(date) {
  if (!date) return null;
  var d = new Date(date);
  var year = d.getFullYear();
  var month = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  return "".concat(year, "-").concat(month, "-").concat(day);
};
var formatTime = exports.formatTime = function formatTime(date) {
  if (!date) return null;
  var d = new Date(date);
  var hours = String(d.getHours()).padStart(2, '0');
  var minutes = String(d.getMinutes()).padStart(2, '0');
  return "".concat(hours, "H").concat(minutes);
};