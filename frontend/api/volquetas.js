import axios from './axios';

export const createNewVolquetaForm = (data) =>
    axios.post('/volquetas/addplanilla', data);

export const genContRandNumberRequest = () => axios.get('/volquetas/gennumber');

// export const getAllVolquetas = (data)=>
//     axios.get('/volquetas/allforms', data);
export const getAllVolquetas = async()=>{
    const response = await axios.get('/volquetas/allforms');
    return response.data;
}
    
   