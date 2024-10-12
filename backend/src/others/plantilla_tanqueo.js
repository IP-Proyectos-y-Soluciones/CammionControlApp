import puppeteer from 'puppeteer';
import { convert } from 'pdf-poppler';
import fs from 'fs';
import path from 'path';
import Imagen from '../models/Imagen';

export async function plantillaTanqueo(data) {
    try {
        // Se genera el PDF con 'puppeteer'
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Formatear la fecha en formato dd-mm-yyyy
        const FormattedDate = new Date(data.fecha_tanqueo).toLocaleDateString(
            'es-VE',
            {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            },
        );

        // Contenido HTML con estilos CSS
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
                                .container {
                                        display: grid;
                                        grid-template-columns: 1fr 1fr; /* Dos columnas iguales */
                                        gap: 10px;
                                        width: 100%;
                                        border-collapse: collapse;
                                        }
                                        .container div {
                                        border: 1px solid #ddd;
                                        padding: 10px;
                                        font-size: 16px;
                                }
                                .container .title {
                                        font-weight: bold;
                                        background-color: #f2f2f2;
                                }
                                .container .value {
                                        font-weight: normal;
                                        color: #000;
                                }
                                .full-row {
                                        grid-column: span 2; /* Hace que ocupe las dos columnas */
                                }
                                .footer {
                                        text-align: center;
                                        margin-top: 30px;
                                        font-size: 14px;
                                        color: #555;
                                }
                        </style>
                </head>
                <body>
                        <h1>Recibo de Tanqueo</h1>
                        <div class="container">
                                <!-- Primera fila -->
                                <div class="title">Recibo Nº</div>
                                <div class="title">Fecha de Tanqueo</div>
                                <div class="value">${data.n_recibo}</div>
                                <div class="value">${FormattedDate}</div>

                                <!-- Segunda fila -->
                                <div class="title">Conductor</div>
                                <div class="title">Vehículo Placas</div>
                                <div class="value">${data.conductor_cedula}</div>
                                <div class="value">${data.vehiculo_placa}</div>

                                <!-- Tercera fila -->
                                <div class="title">Estación de Servicio</div>
                                <div class="title">Cantidad de galones</div>
                                <div class="value">${data.estacion}</div>
                                <div class="value">${data.cantidad_galones}</div>

                                <!-- Cuarta fila -->
                                <div class="title full-row">Valor del Tanqueo</div>
                                <div class="value full-row">${data.valor_tanqueo}</div>
                        </div>
                        <div class="footer">
                                <p>Este es un documento generado electrónicamente</p>
                        </div>
                </body>
        </html>
        `;

        await page.setContent(content);

        // Guardar el PDF temporalmente...
        const pdfDir = path.resolve(__dirname, '../pdf-excel');
        const pdfPath = path.join(
            pdfDir,
            `recibo_tanqueo_${data.n_recibo}.pdf`,
        );

        if (!fs.existsSync(pdfDir)) {
            fs.mkdirSync(pdfDir);
        }

        await page.pdf({
            path: pdfPath, // Guardar PDF localmente
            format: 'A4',
            printBackground: true,
        });

        await browser.close();

        // Convertir PDF a imagen PNG usando pdf-poppler...
        const options = {
            format: 'png', // Formato de salida...
            out_dir: pdfDir, // Carpeta de salida...
            out_prefix: `recibo_tanqueo_${data.n_recibo}`, // Prefijo de la imagen...
            page: null, // Convertir todas las páginas...
        };

        console.log('Ruta del PDF generado:', pdfPath);
        console.log('Contenido de las opciones:', options);

        // Realiza la conversión
        const result = await convert(pdfPath, options).catch((err) => {
            throw new Error(`Error al convertir el PDF: ${err.message}`);
        });

        console.log('Resultado de la conversión:', result);

        // Verifica si la conversión fue exitosa
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

        // Leer la imagen generada...
        const imageBuffer = fs.readFileSync(imagePath);

        const newImage = new Imagen({
            refueling: data._id,
            image_data: imageBuffer,
            mimeType: 'image/png',
        });

        await newImage.save();
        console.log('Imagen guardada correctamente en MongoDB');

        // Eliminar archivos temporales
        fs.unlinkSync(pdfPath);
        fs.unlinkSync(imagePath);
    } catch (error) {
        console.error('Error durante la conversión:', error.message);
        console.error(error.stack); // Esto te mostrará detalles más específicos sobre dónde ocurre el error
    }
}
