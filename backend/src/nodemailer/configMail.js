import nodemailer from 'nodemailer';
const { EMAIL, PASSWORD_MAIL, HOST_MAIL, PORT_MAIL } = process.env;

const transporter = nodemailer.createTransport({
    host: HOST_MAIL,
    port: PORT_MAIL,
    secure: false,
    auth: {
        user: EMAIL,
        pass: PASSWORD_MAIL,
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

export const envioALertaDeVencimiento = async (
    documentosExpirados,
    licenciasExpiradas,
) => {
    const documentosText = documentosExpirados
        .map(
            (doc) =>
                `Documento: ${doc.cerificado_N} vence el ${doc.fecha_vencimiento}`,
        )
        .join('\n');
    const licenciasText = licenciasExpiradas
        .map(
            (lic) =>
                `Licencia: ${lic.licencia_N} vence el ${lic.fecha_vencimiento}`,
        )
        .join('\n');

    try {
        const info = await transporter.sendMail({
            from: EMAIL,
            to: EMAIL,
            subject: 'Documentos y Licencias a punto de vencer',
            text: `Documentos a punto de vencer:\n${documentosText}\n\nLicencias a punto de vencer:\n${licenciasText}`,
        });
        console.log('Correo enviado: %s', info.messageId);
    } catch (error) {
        console.error('Error al enviar el correo: %s', error);
    }
};

export const envioALertaEmail = async (
    listaCumpleañios,
    listaFinalContrato,
) => {
    const fechasCumpleanios = listaCumpleañios
        .map(
            (e) =>
                `Persona: ${
                    (e.nombres, e.apellidos)
                } fecha de cumpleaños ${e.fecha_nacimiento}`,
        )
        .join('\n');
    const contratoRevisar = listaFinalContrato
        .map(
            (c) =>
                `Persona: ${
                    (c.nombres, c.apellidos)
                } contrato vence el ${c.fecha_final_contrato}`,
        )
        .join('\n');

    try {
        const info = await transporter.sendMail({
            from: EMAIL,
            to: EMAIL,
            subject: 'Documentos y Licencias a punto de vencer',
            text: `Cumpleaños del mes:\n${fechasCumpleanios}\n\nContratos a punto de vencer:\n${contratoRevisar}`,
        });
        console.log('Correo enviado: %s', info.messageId);
    } catch (error) {
        console.error('Error al enviar el correo: %s', error);
    }
};
