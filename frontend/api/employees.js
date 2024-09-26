import axios from './axios.js';

export const addEmployeeRequest = (employee) =>
  axios.post('/personas/addpersona', employee);

export const showAllEmployeesRequest = () =>
  axios.get('/personas');

export const getEmployeeByIdRequest = (_id) =>
  axios.get(`/personas/personaid/${_id}`);

export const getEmployeeByDniRequest = (cedula) =>
  axios.get(`/personas/personaced/${cedula}`);

// export const updateEmployeeByIdRequest = (_id) =>
//   axios.patch(`/personas/persona/edit/${_id}`);

export const updateEmployeeByDniRequest = (data) =>
  axios.patch('/personas/persona/edit', data);

// export const deleteEmployeeByIdRequest = (_id) =>
//   axios.patch(`/personas/persona/delete/${_id}`);

export const deleteEmployeeByDniRequest = (data) =>
  axios.patch('/personas/persona/delete', data);
