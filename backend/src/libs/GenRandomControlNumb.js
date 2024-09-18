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
