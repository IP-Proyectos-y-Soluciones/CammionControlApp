import axios from './axios';

export const createNewVolquetaForm = (data) =>
    axios.post('/volquetas/addplanilla', data);

export const viewVolquetaForm = (data) => axios.get('/volquetas', data);

export const updateVolquetaForm = (data) =>
    axios.post('/volquetas/:n_planilla', data);

export const deleteVolquetaForm = (data) =>
    axios.post('/volquetas/:n_planilla', data);
