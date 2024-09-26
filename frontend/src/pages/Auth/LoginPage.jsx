/* eslint-disable no-unused-vars */
import { Input, Label, Button} from '../../components/UI';
import { useForm } from 'react-hook-form';
import { loginRequest } from '../../../api/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../../assets/yadiraLogoColor2.png'
import { useAuth } from '../../context/AuthContext';
import { Loading } from '../../components/Common/Loading';

export function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const {setIsAuthenticated, userRole, setUserRole, userName, setUserName} = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {

      setIsLoading(true); // Mostrar spinner de carga...

      //console.log(data);

      const response = await loginRequest(data);

      //console.log(response.data);

      if (response.status === 200) {
        const role = response.data.usuarioReg.roles || [];
                const fullName = response.data.employeeFullName;
                //
                setUserName(fullName);
                setUserRole(role);
                setIsAuthenticated(true);
                setIsLoading(false);

                //console.log(role)

                // Redirigir según el rol del usuario...
                if (role === 'Owner' || role === 'Admin') {
                    navigate('/employees');
                } else if (role === 'Empleado') {
                    navigate('/general_access');
                    // navigate('/volquetas/planilla/add');
                } else {
                    navigate('/unauthorized');
                }                
            }
    } catch (error) {
      setErrors([error.response?.data?.message]);
    } finally {
      setIsLoading(false); // Se oculta el spinner de carga...
    }
  };

  useEffect(() => {
    if (userName) {
        console.log('Nombre completo actualizado: ', userName);
    }
}, [userName]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (    
    <div className="min-h-screen flex items-center justify-center bg-gray-600">
        {isLoading && (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75 z-50">
        <Loading/>
      </div>
    )}{' '}
    {/* Se renderiza si es true... */}
   
    {/* <div className="min-h-screen flex items-center justify-center bg-gray-600"> */}
      <div className="bg-gray-600 p-8 rounded-lg  w-full max-w-md">        
        <div className="flex justify-center mb-10">
          <img src={logo} alt="imagen" className="h-30 w-auto" />
        </div>
        <h1 className="text-4xl text-center mb-6 text-white">Iniciar Sesión</h1>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div>
          <Label htmlFor="inputValue" className='text-white'>Usuario</Label>
          <Input
            type="text"
            placeholder="Escriba su 'usuario'..."
            {...register('usuario')}
            className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900"          
          />
          </div>

          <div>
          <Label className='text-white' htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="*******"
            {...register('password')}
            className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          </div>

          {errors.length > 0 && (
            <p className="text-white-600 text-center">{errors.join(', ')}</p>
          )}

          <Button
            type="submit"
            className='w-full px-4 py-3 bg-white text-red-700 font-bold rounded-full hover:bg-red-700 hover:text-white transition-colors'
          >
            ACEPTAR
          </Button>
          <div className="text-center py-2 text-gray-400">
            ¿Aún no tienes una cuenta? 
            <Link className="underline text-black hover:text-red-800 transition-colors" to="/register">Registrarse</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
