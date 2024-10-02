/* eslint-disable no-unused-vars */
import axios from './axios';

export const registerVehicleRequest = (data) =>
    axios.post('/vehiculos/create', data);

export const showAllVehiclesRequest = () => axios.get('/vehiculos');

export const assigningVehicleToDriverRequest = (data) =>
    axios.post('/vehiculos/vehiculo/asignacion', data);
