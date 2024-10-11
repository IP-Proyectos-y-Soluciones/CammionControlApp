import PDFDocument from "pdfkit";
import path from "path";

export function plantillaCargaPesada(data, res) {
  try {
    const doc = new PDFDocument();

    // Configurar las cabeceras para que el navegador lo descargue
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=Planilla.pdf`);

    // Pipe the PDF into the response
    doc.pipe(res);

    data.forEach((item) => {
      const {
        n_planilla,
        fecha_inicio,
        fecha_final,
        placa,
        conductor,
        ciudad_inicio,
        ciudad_destino,
        empresa,
        valor_flete,
        anticipo_empresa,
        anticipo_cliente,
        acpm,
        peaje,
        mantenimiento,
        mecanico,
        otros,
        total_anticipos_fletesPagados,
        total_gastos,
        total_saldo,
      } = item;

      const logo = path.join(__dirname, "../icons/yadiraLogoColor2.png");
      doc.image(logo, 50, 3, { width: 200 });

      const planillaText = `Planilla N°:- ${n_planilla}`;
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
          `Ciudad Inicio: ${ciudad_inicio}`,
          `Ciudad Destino: ${ciudad_destino}`,
          `Placa: ${placa.placa}`,
        ],
        [
          `Empresa: ${empresa}`,
          `Conductor: ${conductor.nombres} ${conductor.apellidos}`,
          `Valor Flete: ${valor_flete}`,
        ],
        [
          `Fecha Inicio: ${new Date(fecha_inicio).toLocaleDateString()}`,
          `Fecha Final: ${new Date(fecha_final).toLocaleDateString()}`,
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
        ["Anticipo Empresa", anticipo_empresa],
        ["Anticipo Cliente", anticipo_cliente],
        ["ACPM", acpm],
        ["Peaje", peaje],
        ["Mantenimiento", mantenimiento],
        ["Mecanico", mecanico],
        ["Otros", otros],
        ["Total A-F", total_anticipos_fletesPagados],
        ["Total Gastos", total_gastos],
        ["Total Saldo", total_saldo],
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
    });
  } catch (error) {
    console.error(`Error generando la plantilla: ${error.message}`);
    res.status(500).json({ message: "Error generando el PDF", error });
  }
}
