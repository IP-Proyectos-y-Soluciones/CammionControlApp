/* eslint-disable no-unused-vars */
import { Input, Label } from '../../components/UI';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/yadiraLogoColor2.png';

const apiUrl = import.meta.env.VITE_APP_API_URL;

const RegisterPage = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [personaId, setPersonaId] = useState('');

    async function registerUserSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`${apiUrl}/addusuario`, {
                usuario,
                password,
                personaId,
            });
            console.log(apiUrl);

            alert('Registration successful. Now you can log in');
            console.log('Response:', response.data);
        } catch (error) {
            alert('Registration failed. Please try again later');
            console.error('Error:', error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <div className="bg-gray-600 p-8 rounded-lg  w-full max-w-md">
                <div className="flex justify-center mb-10">
                    <img src={logo} alt="imagen" className="h-30 w-auto" />
                </div>
                <h1 className="text-4xl text-center mb-6 text-white">
                    Registrarse
                </h1>
                <form className="space-y-6" onSubmit={registerUserSubmit}>
                    <div>
                        <Label htmlFor="inputValue" className="text-white">
                            Usuario
                        </Label>
                        <Input
                            type="text"
                            placeholder="John Doe"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                    </div>

                    <div>
                        <Label className="text-white" htmlFor="password">
                            Contraseña
                        </Label>
                        <Input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                    </div>

                    {/* <div>
          <Label className='text-white' htmlFor="password">Persona ID</Label>
          <Input type="text" 
                 placeholder="Persona ID"
                 value={personaId}
                 onChange={e =>setPersonaId(e.target.value)}
                 className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900"   
                 />
                 </div> */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors"
                    >
                        REGISTRARSE
                    </button>
                    <div className="text-center py-2 text-gray-400">
                        Ya tiene una cuenta?{' '}
                        <Link
                            className="underline text-black hover:text-red-800 transition-color"
                            to={'/login'}
                        >
                            Iniciar Sesión
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
