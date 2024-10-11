import axios from './axios';

export const registerVehicleDocumentRequest = (data) =>
    axios.post('/documentos/newdoc', data);

export const registerDriverLicenseRequest = (data) =>
    axios.post('/licencias/addlicencia', data);
