import axios from './axios';

export const createNewRefuelingForm = (data) =>
    axios.post('/refueling/create', data);


export const getAllRefuelingRequest = async()=> {
    const response = await axios.get('/refueling/');
   return response.data.data;
}
     
