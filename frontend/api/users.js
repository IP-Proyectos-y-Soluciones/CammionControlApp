import axios from './axios.js';

export const createNewUserRequest = (user) =>
    axios.post('/usuarios/addusuario', user);

export const showAllUsersRequest = () => axios.get('/usuarios');

export const getUserRequest = (user) => axios.get(`/usuarios/${user}`);

export const updateUserRequest = (_id) => axios.patch(`/usuarios/edit/${_id}`);

export const deleteUserRequest = (_id) => axios.delete(`/usuarios/${_id}`);
