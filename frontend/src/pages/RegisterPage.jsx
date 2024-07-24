
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';
import logo from '../assets/logoWhite.png'

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 async function registerUserSubmit(e){
    e.preventDefault();
try {
  await axios.post('/register',{
    name,
    email,
    password,
  });
  alert('Registration successful. Now you can log in');
} catch (error) {
 alert('Registration failed. Please try again later');
}
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
    <div className='max-w-md'>
    <div className='flex justify-center mb-6'> 
        <img src={logo} alt='imagen' className='h-30 w-auto rounded-full'/> 
        </div>
     <h1 className="text-4xl text-center mb-6 text-gray-900">Registrarse</h1> 
      <form className="space-y-6" onSubmit={registerUserSubmit}>
          <input type="text" 
                placeholder="John Doe" 
                value={name} 
                onChange={e =>setName(e.target.value)}
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900'

                 />
          <input type="email" 
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)} 
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900'

                />
          <input type="password" 
                 placeholder="password"
                 value={password}
                 onChange={e =>setPassword(e.target.value)}
                 className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900'
                 />
          <button 
          type="submit"
          className='w-full py-2 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors'>
          REGISTRARSE
          </button>
          <div className='text-center py-2 text-gray-400'>
            Ya tiene una cuenta? <Link className='underline text-black' to={'/login'}>Iniciar Sesión</Link>
          </div>
      </form>
     </div>
  </div>
  )
}

export default RegisterPage
