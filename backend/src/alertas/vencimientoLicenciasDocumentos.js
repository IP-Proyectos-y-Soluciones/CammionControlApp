import Documento from '../models/Documento.js';
import Licencia from '../models/Licencia.js';
import { envioALertaDeVencimiento } from '../nodemailer/configMail.js';

export const vencimientoLicenciasDocumentos = async () => {
    try {
        const dias = 7;
        const fecha = new Date();
        const documentos = await Documento.find({});
        const documentosExpirados = documentos.filter((doc) => {
            const fechaVencimiento = new Date(doc.fecha_vencimiento);
            const diasRestantes = Math.ceil(
                (fechaVencimiento - fecha) / (1000 * 60 * 60 * 24),
            );
            return diasRestantes <= dias;
        });

        const licencias = await Licencia.find({});
        const licenciasExpiradas = licencias.filter((licencia) => {
            const fechaVencimiento = new Date(licencia.fecha_vencimiento);
            const diasRestantes = Math.ceil(
                (fechaVencimiento - fecha) / (1000 * 60 * 60 * 24),
            );
            return diasRestantes <= dias;
        });

        if (documentosExpirados.length > 0 || licenciasExpiradas.length > 0) {
            await envioALertaDeVencimiento(
                documentosExpirados,
                licenciasExpiradas,
            );
        }

        if (documentosExpirados.length > 0) {
            console.log('Documentos a punto de vencer:', documentosExpirados);
        }

        if (licenciasExpiradas.length > 0) {
            console.log('Licencias a punto de vencer:', licenciasExpiradas);
        }
    } catch (error) {
        console.error('Error al verificar documentos y licencias:', error);
    }
};
