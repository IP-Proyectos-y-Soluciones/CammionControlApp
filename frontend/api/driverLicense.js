/* eslint-disable no-unused-vars */
import axios from './axios';

export const registerDriverLicenseRequest = (data) =>
    axios.post('/licencias/addlicencia', data);
