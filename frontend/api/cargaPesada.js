import axios from './axios';

export const createNewHeavyloadaForm = async (data) => {
    try {
        const response = await axios.post('/heavyload/addheavyloadform', data, {
            responseType: 'blob',
        });

        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Planilla.pdf'); // Nombre del archivo que se descargará
        document.body.appendChild(link);
        link.click();

        link.parentNode.removeChild(link);
        return response.status;
    } catch (error) {
        console.error(
            'Error creando la carga pesada o descargando el PDF:',
            error,
        );
    }
};

export const getHeavyloadaForm = (data) => axios.get('/heavyload', data);
