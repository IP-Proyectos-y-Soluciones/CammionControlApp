import axios from './axios.js';

export const loginRequest = (user) => axios.post('/auth/login', user);

export const logoutRequest = () =>
  axios.post('/auth/logout', {}, { withCredentials: true });

export const loginCheck =()=>
  axios.get('/auth/checklogin', {withCredentials: true });

export const getDriverByDniRequest = (cedula) =>
  axios.get(`/auth/driverced/${cedula}`);

export const getVehicleByIDRequest = (id) => 
  axios.get(`/auth/vehicleid/${id}`);