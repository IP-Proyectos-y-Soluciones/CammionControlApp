import Volqueta from '../models/Volqueta';

export const generateRandomFormNumber = async () => {
    const prefix = 'YD-';

    // Generación de un caracter aleatorio de A-Z...
    const randChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));

    // Generación de un número aleatorio de 7 dígitos, relleno con ceros...
    const randNumber = Math.floor(Math.random() * 10000000)
        .toString()
        .padStart(7, '0');

    // Ensamblar el n_planilla...
    const n_planilla = `${prefix}${randChar}${randNumber}`;

    // Se verifica si existe en la base de datos...
    const numberExist = await Volqueta.findOne({ n_planilla });

    if (numberExist) {
        return generateRandomFormNumber();
    }

    return n_planilla;
};

export const generarNumeroPlanilla = () => {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');
    const numeroAleatorio = Math.floor(1000000 + Math.random() * 900000);

    return `YM${año}${mes}${dia}-${numeroAleatorio}`;
};
