"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plantillaVolquetas = plantillaVolquetas;
var PDFDocument = require("pdfkit");
var fs = require("fs");
var path = require("path");
function plantillaVolquetas(volquetas) {
  volquetas.forEach(function (volqueta) {
    try {
      var fecha = volqueta.fecha,
        placa = volqueta.placa,
        conductor_cedula = volqueta.conductor_cedula,
        cliente = volqueta.cliente,
        volmts3 = volqueta.volmts3,
        n_viajes = volqueta.n_viajes,
        material = volqueta.material,
        hora_inicio = volqueta.hora_inicio,
        hora_final = volqueta.hora_final,
        total_horas = volqueta.total_horas,
        km_inicial = volqueta.km_inicial,
        km_final = volqueta.km_final,
        total_km_dia = volqueta.total_km_dia,
        honorarios = volqueta.honorarios,
        lugar_de_cargue = volqueta.lugar_de_cargue,
        lugar_de_descargue = volqueta.lugar_de_descargue,
        observacion = volqueta.observacion;
      var doc = new PDFDocument();
      var nombreArchivo = path.join(__dirname, "Planilla_".concat(volqueta.n_planilla, ".pdf"));
      var salida = fs.createWriteStream(nombreArchivo);
      doc.pipe(salida);
      var logo = path.join(__dirname, "./yadiraLogoColor2.png");
      doc.image(logo, 50, 3, {
        width: 200
      });
      var planillaText = "Planilla N\xB0:- ".concat(volqueta.n_planilla);
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
      var detallesGenerales = [["Fecha: ".concat(volqueta.fecha.toLocaleDateString()), "Placa: ".concat(volqueta.placa.placa), "VOL.MTS3: ".concat(volqueta.volmts3)], ["Cliente: ".concat(volqueta.cliente), "Conductor: ".concat(volqueta.conductor.nombres).concat(volqueta.conductor.apellidos), "N_viajes: ".concat(volqueta.n_viajes)], ["Hora Inicio: ".concat(volqueta.hora_inicio.toLocaleTimeString()), "Hora Final: ".concat(volqueta.hora_final.toLocaleTimeString()), "Total horas: ".concat(volqueta.total_horas)], ["KM Inicial: ".concat(volqueta.km_inicial), "KM Final: ".concat(volqueta.km_final), "KM recorridos: ".concat(volqueta.total_km_dia)]];
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
      var datosAdicionales = [["Material", volqueta.material], ["Lugar De Cargue", volqueta.lugar_de_cargue], ["Lugar De Descargue", volqueta.lugar_de_descargue], ["Honorarios", volqueta.honorarios], ["Observacion", volqueta.observacion]];
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
        console.log("Plantilla generada: Plantilla_".concat(volqueta.n_planilla, ".pdf"));
      });
      salida.on("error", function (err) {
        console.error("Error en el flujo de salida: ".concat(err.message));
      });
    } catch (error) {
      console.error("Error generando la plantilla: ".concat(error.message));
    }
  });
}