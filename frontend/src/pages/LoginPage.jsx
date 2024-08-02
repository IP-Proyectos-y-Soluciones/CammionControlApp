
import { Link } from 'react-router-dom'
import '../index.css'
import { useState } from 'react'
import axios from 'axios';
import logo from '../assets/logoWhite.png'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   async function handleLoginSubmit(e){
//     e.preventDefault();
// try {
//  await axios.post(`${process.env.REACT_APP_API_URL}/login`, {email, password});
// alert('login successful');
// } catch (error) {
//   alert('login failed');
// }
//   }

  async function handleLoginSubmit(e){
  e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/api/usuarios/', {
        email, password
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
       <h1 className="text-4xl text-center mb-6 text-gray-700">Iniciar Sesión</h1> 
        <form className="space-y-6" onSubmit={handleLoginSubmit}>
            <input 
            type="email" 
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900'
              />
            <input 
            type="password" 
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900'

            />
            <button
            type='submit' 
            className='w-full py-2 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors'>
              INICIAR SESIÓN
            </button>
            <div className='text-center py-2 text-gray-400'>
              Aún no tiene una cuenta? <Link className='underline text-black hover:text-red-800 transition-color' to={'/register'}>Registrarse</Link>
            </div>
        </form>
        </div>
    </div>
  )
}

export default LoginPage


