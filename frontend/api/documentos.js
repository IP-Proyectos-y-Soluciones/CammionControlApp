import axios from './axios';

export const createNewDocument = (data) =>
    axios.post('/documentos/newdoc', data);

export const createNewLicense = (data) =>
    axios.post('/licencias/addlicencia', data);
