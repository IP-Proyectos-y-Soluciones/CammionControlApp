import axios from './axios';

export const createNewVolquetaForm = (data) =>
    axios.post('/volquetas/addplanilla', data);

export const genContRandNumberRequest = () => axios.get('/volquetas/gennumber');
