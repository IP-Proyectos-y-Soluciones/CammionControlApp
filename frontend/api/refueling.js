import axios from './axios';

export const createNewRefuelingForm = (data) =>
    axios.post('/refueling/create', data);
