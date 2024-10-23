/* eslint-disable no-unused-vars */
import axios from './axios';

export const registerDriverLicenseRequest = (data) =>
    axios.post('/licencias/addlicencia', data);

export const getDriverLicenseByIDRequest = (id) =>
    axios.get(`/licencias/licencia/${id}`);

export const getDriverLicenseRequest = (driverLicense, typeOfVehicle) =>
    axios.get(
        `/licencias?licencia_N=${driverLicense}&clase_de_vehiculo=${typeOfVehicle}`,
    );

    