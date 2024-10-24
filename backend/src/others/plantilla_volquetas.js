import puppeteer from 'puppeteer';
import { convert } from 'pdf-poppler';
import fs from 'fs';
import path from 'path';
import VolquetaImage from '../models/VolquetaImage';

export async function volquetaTemplate(data) {
    try {
        // Cargar el logo como base64...
        const logoPath = path.resolve(
            __dirname,
            '../icons/yadiraLogoColor2.png',
        );
        const logoBase64 = fs.readFileSync(logoPath, 'base64');
        const logoDataURL = `data:image/png;base64,${logoBase64}`;

        // Se genera el PDF con 'puppeteer'...
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Formatear la fecha en formato dd-mm-yyyy...
        const FormattedDate = new Date(data.fecha).toLocaleDateString('es-CO', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            timeZone: 'America/Bogota', // Zona horaria de Colombia...
        });

        const FormattedStartTime = new Date(
            data.hora_inicio,
        ).toLocaleTimeString('es-CO', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false, // Ajusta el formato a 24 horas...
            timeZone: 'America/Bogota', // Zona horaria de Colombia...
        });

        const FormattedEndTime = new Date(data.hora_final).toLocaleTimeString(
            'es-CO',
            {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false, // Ajusta el formato a 24 horas...
                timeZone: 'America/Bogota', // Zona horaria de Colombia...
            },
        );

        const content = `
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 20px;
                            padding: 0;
                        }
                        h1 {
                            text-align: center;
                            font-size: 24px;
                            margin-bottom: 20px;
                            color: #333;
                        }
                        .header {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                        .logo {
                            width: 20%;
                            height: 20%;
                        }
                        .planilla {
                            font-size: 14px;
                            color: blue;
                            text-align: right;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 20px;
                        }
                        th, td {
                            border: 1px solid #ddd;
                            padding: 10px;
                            text-align: left;
                        }
                        th {
                            background-color: #f2f2f2;
                            font-weight: bold;
                        }
                        .right-align {
                            text-align: right;
                        }
                        .subtitulo {
                            margin-top: 20px;
                            font-size: 18px;
                            font-weight: bold;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 50px;
                            font-size: 14px;
                            color: #555;
                        }
                    </style>
                </head>
                <body>
                    <!-- Encabezado con logo y número de planilla -->
                    <div class="header">
                        <img src="${logoDataURL}" class="logo" alt="Logo">
                        <div class="planilla">Planilla Nº: ${data.n_planilla}</div>
                    </div>

                    <h1>CONTROL DIARIO DE TRANSPORTE DE MATERIALES [VOLQUETAS]</h1>

                    <!-- Tabla de Detalles Generales -->
                    <h2 class="subtitulo">Detalles Generales</h2>
                    <table>
                        <tr>
                            <th>Conductor</th>
                            <th>Placas</th>
                            <th>Fecha</th>
                        </tr>
                        <tr>
                            <td>${data.conductor_cedula}</td>
                            <td>${data.placa_vehiculo}</td>
                            <td>${FormattedDate}</td>
                        </tr>
                        <tr>
                            <th>Hora Inicio</th>
                            <th>Hora Final</th>
                            <th>Total Horas</th>
                        </tr>
                        <tr>
                            <td>${FormattedStartTime}</td>
                            <td>${FormattedEndTime}</td>
                            <td>${data.total_horas}</td>
                        </tr>
                        <tr>
                            <th>Kmt Inicial</th>
                            <th>Kmt Final</th>
                            <th>Total Km x día</th>
                        </tr>
                        <tr>
                            <td>${data.km_inicial}</td>
                            <td>${data.km_final}</td>
                            <td>${data.total_km_dia}</td>
                        </tr>
                    </table>

                    <!-- Tabla de Detalles Adicionales -->
                    <h2 class="subtitulo">Detalles Adicionales</h2>
                    <table>
                    <tr>
                        <th>Cliente</th>
                        <th>Material</th>
                        <th>Volumen Mts3</th>
                    </tr>
                    <tr>
                        <td>${data.cliente}</td>
                        <td>${data.material}</td>
                        <td>${data.volmts3}</td>
                    </tr>
                    <tr>
                        <th>Cant. Viajes</th>
                        <th>Lugar de Cargue</th>
                        <th>Lugar de Descargue</th>
                    </tr>
                    <tr>
                        <td>${data.n_viajes}</td>
                        <td>${data.lugar_de_cargue}</td>
                        <td>${data.lugar_de_descargue}</td>
                    </tr>
                    <tr>
                        <th>Observaciones</th>
                        <td colspan="2">${data.observacion}</td>
                    </tr>
                    </table>

                    <div class="footer">
                        <p>Este es un documento generado electrónicamente</p>
                    </div>
                </body>
            </html>
        `;

        // Configuración del contenido en la página
        await page.setContent(content);

        // Guardar el PDF temporalmente
        const pdfDir = path.resolve(__dirname, '../pdf-excel');
        const pdfPath = path.join(pdfDir, `volqueta_${data.n_planilla}.pdf`);

        if (!fs.existsSync(pdfDir)) {
            fs.mkdirSync(pdfDir);
        }

        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
        });

        await browser.close();

        // Convertir PDF a imagen PNG usando pdf-poppler
        const options = {
            format: 'png',
            out_dir: pdfDir,
            out_prefix: `volqueta_${data.n_planilla}`,
            page: null,
        };

        const result = await convert(pdfPath, options).catch((err) => {
            throw new Error(`Error al convertir el PDF: ${err.message}`);
        });

        // Verificar si la conversión fue exitosa
        const convertedFiles = fs
            .readdirSync(pdfDir)
            .filter(
                (file) =>
                    file.startsWith(options.out_prefix) &&
                    file.endsWith('.png'),
            );

        if (convertedFiles.length === 0) {
            throw new Error('La conversión de PDF a imagen falló');
        }

        const imagePath = path.join(pdfDir, convertedFiles[0]);

        // Leer la imagen generada
        const imageBuffer = fs.readFileSync(imagePath);

        // Guardar la imagen PNG en MongoDB
        const newImage = new VolquetaImage({
            volqueta: data._id,
            image_data: imageBuffer,
            mimeType: 'image/png',
        });

        await newImage.save();
        console.log('Imagen guardada correctamente en MongoDB');

        // Eliminar archivos temporales
        fs.unlinkSync(pdfPath);
        fs.unlinkSync(imagePath);
    } catch (error) {
        console.error(
            'Error durante la generación del documento:',
            error.message,
        );
        console.error(error.stack);
    }
}
