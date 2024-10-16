/* eslint-disable no-unused-vars */
import { Input, Label, Button } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { getDriverByDniRequest, getVehicleByIDRequest, loginRequest } from '../../../api/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../../assets/yadiraLogoColor2.png';
import { useAuth } from '../../context/AuthContext';
import { Loading } from '../../components/Common/Loading';

export function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const {setIsAuthenticated, userRole, setUserRole, userName, setUserName, setDNI, setVehicleRegistrationPlate} = useAuth();
  const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setIsLoading(true); // Mostrar spinner de carga...

      const response = await loginRequest(data);

      //console.log(response.data);

      if (response.status === 200) {
        const driverData = await getDriverByDniRequest(
          response.data.usuarioReg.usuario_cedula,
        );
        setDNI(driverData.data.cedula);

        if(driverData.data.vehiculos[0] !== undefined){
          const getVehRegPlate = await getVehicleByIDRequest(
            driverData.data.vehiculos[0],
          );
          setVehicleRegistrationPlate(getVehRegPlate.data.data.placa);
        }

                const role = response.data.usuarioReg.roles || [];
                const fullName = response.data.employeeFullName;
                //
                setUserName(fullName);
                setUserRole(role);
                setIsAuthenticated(true);
                setIsLoading(false);

                // Redirigir según el rol del usuario...
                if (role === 'Owner' || role === 'Admin') {
                    navigate('/general_access_admin');
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
    <div className="min-h-screen flex items-center justify-center bg-gradient">
        {/* {isLoading && (
      <div>
        <Loading/>
      </div>
    )}{' '} */}
    {/* Se renderiza si es true... */}
   
    {/* <div className="min-h-screen flex items-center justify-center bg-gray-600"> */}
      <div className="bg-transparent p-8 rounded-lg w-full max-w-md">        
        <div className="flex justify-center mb-16">
          <img src={logo} alt="imagen" className="h-30 w-auto" />
        </div>
        {/* <h1 className="text-4xl text-center mb-6 text-white">Iniciar Sesión</h1> */}

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div>
          {/* <Label htmlFor="inputValue" className='text-white'>Usuario</Label> */}
          <Input
            type="text"
            placeholder="Usuario"
            {...register('usuario')}
            className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder:text-gray-500 text-gray-900"          
          />
          </div>

          <div>
          {/* <Label className='text-white' htmlFor="password">Contraseña</Label> */}
          <Input
            type="password"
            placeholder="Contraseña"
            {...register('password')}
            className="w-full mb-8 px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder:text-gray-500 text-gray-900"
          />
          </div>

                    {errors.length > 0 && (
                        <p className="text-white-600 text-center">
                            {errors.join(', ')}
                        </p>
                    )}

          <div className='mt-6'>
          <Button
            type="submit"
            className='w-full px-4 py-3 bg-transparent border border-white text-white font-bold rounded-full hover:bg-gray-600 hover:border-none hover:font-bold transition-colors'
          >
            INICIAR SESIÓN
          </Button>
          </div>
          {/* <div className="text-center py-2 text-gray-400">
            ¿Aún no tienes una cuenta? 
            <Link className="underline text-black hover:text-red-800 transition-colors" to="/register">Registrarse</Link>
          </div> */}
        </form>
      </div>
    </div>
  );
}

