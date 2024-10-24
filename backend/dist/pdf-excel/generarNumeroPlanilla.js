"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generarNumeroPlanilla = void 0;
var generarNumeroPlanilla = exports.generarNumeroPlanilla = function generarNumeroPlanilla() {
  var fecha = new Date();
  var año = fecha.getFullYear();
  var mes = String(fecha.getMonth() + 1).padStart(2, "0");
  var dia = String(fecha.getDate()).padStart(2, "0");
  var numeroAleatorio = Math.floor(100000 + Math.random() * 900000);
  return "YM".concat(año).concat(mes).concat(dia, "-").concat(numeroAleatorio);
};