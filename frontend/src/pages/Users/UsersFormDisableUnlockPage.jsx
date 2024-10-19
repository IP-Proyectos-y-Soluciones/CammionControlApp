import { Button, Input, Label } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { unlockUser } from '../../../api/admin';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import swal2 from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { disableUser } from '../../../api/users';

export function UsersFormUnlockPage() {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await unlockUser(data);

      if (response.status === 200) {
        swal2.fire({
          title: 'Desbloqueo exitoso...!',
          text: `El usuario ${data.usuario} ha sido desbloqueado exitosamente...!!!`,
          icon: 'success',
        });
        navigate('/users');
      }
    } catch (error) {
      setError('Usuario inválido o inexistente...!');
    }
  };

  const onCancel = () =>{
    reset();
    navigate('/employees')
  }

  return (
    <div className='bg-otherpages min-h-screen'>
    <div className="customDiv-1">
      <div className="customDiv-2">
        <div className="customDivH2">
          <h2 className="customH2">
            Desbloqueo de Usuario
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pt-5 pl-6 pr-6 pb-4"
        >
          <div>
            <Label htmlFor="inputValue">Usuario</Label>
            <Input
              type="text"
              placeholder="Escriba su 'usuario'..."
              {...register('usuario')}
            />
            {error && (
              <p className="text-red-600">{error}</p>
            )}
          </div>

          <div className='flex justify-end gap-5 mt-3'>
            <div>
              <Button
              type="button"
              onClick={onCancel}
              className='rounded-md btn-formularios'
              >
                <FontAwesomeIcon
                icon={faAngleLeft}
                className='absolute left-3 text-lg'
                />
                <span className='text-red-700'>Cancelar</span>
               
              </Button>
            </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="rounded-md btn-formularios"
            >
              <span className='text-red-700'>Aceptar</span>
              <FontAwesomeIcon
              icon={faAngleRight}
              className='absolute right-3 text-lg'
              />        
            </Button>
          </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export function UsersFormDisablePage(){
  const {register, handleSubmit, reset} = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // confirmación del bloqueo por medio de un sweetalert...
      const result = await swal2.fire({
        title: '¿Está seguro...?',
        text: 'Esta acción bloqueará a el usuario e impedirá que el empleado asociado pueda iniciar sesión. ¡No se puede revertir...!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, bloquear...',
        cancelButtonText: 'No, cancelar...',
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        try {
          await disableUser(data);

          swal2.fire({
            title: 'Bloqueado...!',
            text: `El usuario ${data.usuario} ha sido inhabilitado satisfactoriamente...!!!`,
            icon: 'success',
          });

          setError(null);

          navigate('/users');
        } catch (error) {
          console.error(error.message);
          //Mostar mensaje de error
          swal2.fire({
            title: 'Error',
            text: 'Hubo un problema al bloquear el usuario.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      }else{
        setError(null);

        navigate('/users');
      }
      
    } catch (error) {
      setError('Usuario inválido o inexistente...!');
    }
  };

  const onCancel = () =>{
    reset();
    navigate('/employees')
  }

  return (
    <div className='bg-otherpages min-h-screen'>
    <div className="customDiv-1">
      <div className="customDiv-2">
        <div className="customDivH2">
          <h2 className="customH2">
            Inhabilitación de Usuario
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pt-5 pl-6 pr-6 pb-4"
        >
          <div>
            <Label htmlFor="inputValue">Usuario</Label>
            <Input
              type="text"
              placeholder="Escriba su 'usuario'..."
              {...register('usuario')}
            />
            {error && (
              <p className="text-red-600">{error}</p>
            )}
          </div>

          <div className='flex justify-end gap-5 mt-3'>
            <div>
              <Button
              type="button"
              onClick={onCancel}
              className='rounded-md btn-formularios'
              >
                <FontAwesomeIcon
                icon={faAngleLeft}
                className='absolute left-3 text-lg'
                />
                <span className='text-red-700'>Cancelar</span>
               
              </Button>
            </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="rounded-md btn-formularios"
            >
              <span className='text-red-700'>Aceptar</span>
              <FontAwesomeIcon
              icon={faAngleRight}
              className='absolute right-3 text-lg'
              />        
            </Button>
          </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}