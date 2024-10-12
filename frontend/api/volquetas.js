import axios from './axios';

export const createNewVolquetaForm = async (data) => {
    try {
        const response = await axios.post('/volquetas/addplanilla', data, {
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

export const viewVolquetaForm = (data) => axios.get('/volquetas', data);

export const updateVolquetaForm = (data) =>
    axios.put('/volquetas/:n_planilla', data);

export const deleteVolquetaForm = (data) =>
    axios.delete('/volquetas/:n_planilla', data);
