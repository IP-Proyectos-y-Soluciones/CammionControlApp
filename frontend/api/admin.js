import axios from './axios.js';

export const unlockUser = (user) => axios.post('/admin/unlock-user', user);
