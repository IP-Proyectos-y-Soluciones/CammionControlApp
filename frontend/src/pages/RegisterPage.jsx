
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';
import logo from '../assets/logoWhite.png'


// // Configuración global de Axios
// axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
// axios.defaults.withCredentials = true;

// axios.interceptors.request.use((config) => {
//   const csrfToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('csrfToken='));
//   if (csrfToken) {
//     config.headers['X-CSRF-Token'] = csrfToken.split('=')[1];
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

const RegisterPage = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [personaId, setPersonaId] = useState('');
  //const [error, setError] = useState('');

//  async function registerUserSubmit(e){
//     e.preventDefault();
// try {
//  // const response = await axios.post(`${apiUrl}/addusuario`,{
//   const response = await axios.post('/usuarios/addusuario',{
//     usuario,
//     password,
//     personaId,
    
//   });
//  // console.log(apiUrl);
//   console.log('Response:', response.data);
//   alert('Registration successful. Now you can log in');
// } catch (error) {
//  console.error('Error:', error);
//  setError('Registration failed. Please try again later');
// }
//   }

//  async function registerUserSubmit(e){
//     e.preventDefault();
//     await axios.post('http://localhost:7000/api/usuarios/addusuario',{  
//     usuario,
//     password,
//     personaId,    
//   })
//   .then(result => console.log(result))
//   .catch(err => console.log(err))
//   }

   async function registerUserSubmit(e){
    e.preventDefault();
    try {
     // const response = await axios.post('http://localhost:7000/api/usuarios/addusuario', {
      const response = await axios.post('http://localhost:7000/api/personas/addpersona', {
        usuario,
        password,
        personaId
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
    <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
    <div className='flex justify-center mb-10'> 
        <img src={logo} alt='imagen' className='h-30 w-auto'/> 
        </div>
     <h1 className="text-4xl text-center mb-6 text-gray-700">Registrarse</h1> 
      <form className="space-y-6" onSubmit={registerUserSubmit}>
          <input type="text" 
                placeholder="Ingrese su Nombre" 
                autoComplete="off"
                value={usuario} 
                onChange={e =>setUsuario(e.target.value)}
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900'

                 />
        
          <input type="password" 
                 placeholder="password"
                 value={password}
                 onChange={e =>setPassword(e.target.value)}
                 className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900'
                 />

          <input type="text" 
                 placeholder="Persona ID"
                 value={personaId}
                 onChange={e =>setPersonaId(e.target.value)}
                 className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900'
                 />
                 {/* {error && <div className="text-red-600">{error}</div>} */}
          <button 
          type="submit"
          className='w-full py-2 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors'>
          REGISTRARSE
          </button>
          <div className='text-center py-2 text-gray-400'>
            Ya tiene una cuenta? <Link className='underline text-black hover:text-red-800 transition-color' to={'/login'}>Iniciar Sesión</Link>
          </div>
      </form>
     </div>
  </div>
  )
}

export default RegisterPage
