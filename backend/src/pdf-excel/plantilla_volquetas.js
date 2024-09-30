const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

export function plantillaVolquetas(volquetas) {
  volquetas.forEach((volqueta) => {
    try {
      const {
        fecha,
        placa,
        conductor_cedula,
        cliente,
        volmts3,
        n_viajes,
        material,
        hora_inicio,
        hora_final,
        total_horas,
        km_inicial,
        km_final,
        total_km_dia,
        honorarios,
        lugar_de_cargue,
        lugar_de_descargue,
        observacion,
      } = volqueta;

      const doc = new PDFDocument();
      const nombreArchivo = path.join(
        __dirname,
        `Planilla_${volqueta.n_planilla}.pdf`
      );
      const salida = fs.createWriteStream(nombreArchivo);
      doc.pipe(salida);

      const logo = path.join(__dirname, "./yadiraLogoColor2.png");
      doc.image(logo, 50, 3, { width: 200 });

      const planillaText = `Planilla N°:- ${volqueta.n_planilla}`;
      const textWidth = doc.widthOfString(planillaText);
      const textXPosition = doc.page.width - 50 - textWidth;

      doc
        .fontSize(8)
        .text(planillaText, textXPosition, 60)
        .moveDown()
        .moveTo(50, 100)
        .stroke();

      const titulo = "Detalles Generales";
      const tituloWidth = doc.widthOfString(titulo);
      const tituloXPosition = (doc.page.width - tituloWidth) / 2;

      doc.fontSize(12).text(titulo, tituloXPosition, 120).moveDown(1.5);

      const startX = 50;
      const startY = 130;
      const cellWidth = 170;
      const cellHeight = 20;
      let currentY = startY;

      const detallesGenerales = [
        [
          `Fecha: ${volqueta.fecha.toLocaleDateString()}`,
          `Placa: ${volqueta.placa.placa}`,
          `VOL.MTS3: ${volqueta.volmts3}`,
        ],
        [
          `Cliente: ${volqueta.cliente}`,
          `Conductor: ${volqueta.conductor.nombres}${volqueta.conductor.apellidos}`,
          `N_viajes: ${volqueta.n_viajes}`,
        ],
        [
          `Hora Inicio: ${volqueta.hora_inicio.toLocaleTimeString()}`,
          `Hora Final: ${volqueta.hora_final.toLocaleTimeString()}`,
          `Total horas: ${volqueta.total_horas}`,
        ],
        [
          `KM Inicial: ${volqueta.km_inicial}`,
          `KM Final: ${volqueta.km_final}`,
          `KM recorridos: ${volqueta.total_km_dia}`,
        ],
      ];

      detallesGenerales.forEach((row) => {
        row.forEach((text, index) => {
          const xPos = startX + index * cellWidth;
          doc.rect(xPos, currentY, cellWidth, cellHeight).stroke();
          doc.fontSize(10).text(text, xPos + 5, currentY + 5, {
            width: cellWidth - 10,
            align: "left",
          });
        });
        currentY += cellHeight;
      });

      const datosAdicionalesTitulo = "Datos Adicionales";
      const datosAdicionalesTituloWidth = doc.widthOfString(
        datosAdicionalesTitulo
      );
      const datosAdicionalesTituloXPosition =
        (doc.page.width - datosAdicionalesTituloWidth) / 2;

      doc
        .fontSize(12)
        .text(
          datosAdicionalesTitulo,
          datosAdicionalesTituloXPosition,
          currentY + 20
        )
        .moveDown(1.5);

      currentY += 40;

      const datosAdicionales = [
        ["Material", volqueta.material],
        ["Lugar De Cargue", volqueta.lugar_de_cargue],
        ["Lugar De Descargue", volqueta.lugar_de_descargue],
        ["Honorarios", volqueta.honorarios],
        ["Observacion", volqueta.observacion],
      ];

      const datosCellWidth = 250;

      datosAdicionales.forEach((row) => {
        row.forEach((text, index) => {
          const xPos = startX + index * datosCellWidth;
          doc.rect(xPos, currentY, datosCellWidth, cellHeight).stroke();
          doc.fontSize(10).text(text, xPos + 5, currentY + 5, {
            width: datosCellWidth - 10,
            align: "left",
          });
        });
        currentY += cellHeight;
      });

      doc.end();

      salida.on("finish", () => {
        console.log(`Plantilla generada: Plantilla_${volqueta.n_planilla}.pdf`);
      });
      salida.on("error", (err) => {
        console.error(`Error en el flujo de salida: ${err.message}`);
      });
    } catch (error) {
      console.error(`Error generando la plantilla: ${error.message}`);
    }
  });
}
