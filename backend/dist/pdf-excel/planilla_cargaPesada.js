"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plantillaCargaPesada = plantillaCargaPesada;
var _pdfkit = _interopRequireDefault(require("pdfkit"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function plantillaCargaPesada(data) {
  data.forEach(function (item) {
    try {
      var n_planilla = item.n_planilla,
        fecha_inicio = item.fecha_inicio,
        fecha_final = item.fecha_final,
        placa = item.placa,
        conductor = item.conductor,
        ciudad_inicio = item.ciudad_inicio,
        ciudad_destino = item.ciudad_destino,
        empresa = item.empresa,
        valor_flete = item.valor_flete,
        anticipo_empresa = item.anticipo_empresa,
        anticipo_cliente = item.anticipo_cliente,
        acpm = item.acpm,
        peaje = item.peaje,
        mantenimiento = item.mantenimiento,
        mecanico = item.mecanico,
        otros = item.otros,
        total_anticipos_fletesPagados = item.total_anticipos_fletesPagados,
        total_gastos = item.total_gastos,
        total_saldo = item.total_saldo;
      var doc = new _pdfkit["default"]();
      var nombreArchivo = _path["default"].join(__dirname, "Planilla_".concat(n_planilla, ".pdf"));
      var salida = _fs["default"].createWriteStream(nombreArchivo);
      doc.pipe(salida);
      var logo = _path["default"].join(__dirname, "./yadiraLogoColor2.png");
      doc.image(logo, 50, 3, {
        width: 200
      });
      var planillaText = "Planilla N\xB0:- ".concat(n_planilla);
      var textWidth = doc.widthOfString(planillaText);
      var textXPosition = doc.page.width - 50 - textWidth;
      doc.fontSize(8).text(planillaText, textXPosition, 60).moveDown().moveTo(50, 100).stroke();
      var titulo = "Detalles Generales";
      var tituloWidth = doc.widthOfString(titulo);
      var tituloXPosition = (doc.page.width - tituloWidth) / 2;
      doc.fontSize(12).text(titulo, tituloXPosition, 120).moveDown(1.5);
      var startX = 50;
      var startY = 130;
      var cellWidth = 170;
      var cellHeight = 20;
      var currentY = startY;
      var detallesGenerales = [["Ciudad Inicio: ".concat(ciudad_inicio), "Ciudad Destino: ".concat(ciudad_destino), "Placa: ".concat(placa.placa)], ["Empresa: ".concat(empresa), "Conductor: ".concat(conductor.nombres, " ").concat(conductor.apellidos), "Valor Flete: ".concat(valor_flete)], ["Fecha Inicio: ".concat(new Date(fecha_inicio).toLocaleDateString()), "Fecha Final: ".concat(new Date(fecha_final).toLocaleDateString())]];
      detallesGenerales.forEach(function (row) {
        row.forEach(function (text, index) {
          var xPos = startX + index * cellWidth;
          doc.rect(xPos, currentY, cellWidth, cellHeight).stroke();
          doc.fontSize(10).text(text, xPos + 5, currentY + 5, {
            width: cellWidth - 10,
            align: "left"
          });
        });
        currentY += cellHeight;
      });
      var datosAdicionalesTitulo = "Datos Adicionales";
      var datosAdicionalesTituloWidth = doc.widthOfString(datosAdicionalesTitulo);
      var datosAdicionalesTituloXPosition = (doc.page.width - datosAdicionalesTituloWidth) / 2;
      doc.fontSize(12).text(datosAdicionalesTitulo, datosAdicionalesTituloXPosition, currentY + 20).moveDown(1.5);
      currentY += 40;
      var datosAdicionales = [["Anticipo Empresa", anticipo_empresa], ["Anticipo Cliente", anticipo_cliente], ["ACPM", acpm], ["Peaje", peaje], ["Mantenimiento", mantenimiento], ["Mecanico", mecanico], ["Otros", otros], ["Total A-F", total_anticipos_fletesPagados], ["Total Gastos", total_gastos], ["Total Saldo", total_saldo]];
      var datosCellWidth = 250;
      datosAdicionales.forEach(function (row) {
        row.forEach(function (text, index) {
          var xPos = startX + index * datosCellWidth;
          doc.rect(xPos, currentY, datosCellWidth, cellHeight).stroke();
          doc.fontSize(10).text(text, xPos + 5, currentY + 5, {
            width: datosCellWidth - 10,
            align: "left"
          });
        });
        currentY += cellHeight;
      });
      doc.end();
      salida.on("finish", function () {
        console.log("Plantilla generada: Planilla_".concat(n_planilla, ".pdf"));
      });
      salida.on("error", function (err) {
        console.error("Error en el flujo de salida: ".concat(err.message));
      });
    } catch (error) {
      console.error("Error generando la plantilla: ".concat(error.message));
    }
  });
}