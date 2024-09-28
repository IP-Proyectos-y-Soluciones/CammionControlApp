import axios from './axios';

export const createNewHeavyloadaForm = (data) =>
    axios.post('/heavyload/addheavyloadform', data);

export const getHeavyloadaForm = (data) => axios.get('/heavyload', data);
