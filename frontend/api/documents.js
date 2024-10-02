/* eslint-disable no-unused-vars */
import axios from './axios';

export const registerVehicleDocumentRequest = (data) =>
    axios.post('/documentos/newdoc', data);
