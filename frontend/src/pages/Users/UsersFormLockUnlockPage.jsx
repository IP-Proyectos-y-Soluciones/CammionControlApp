import { Button, Input, Label } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { unlockUser } from '../../../api/admin';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import swal2 from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export function UsersFormLockUnlockPage() {
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
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-100 border-4 border-red-600 max-w-md w-full p-0 rounded-md">
        <div className="bg-red-600 flex items-stretch">
          <h2 className="text-2xl font-bold italic ml-24 mb-2 text-gray-100">
            Desbloqueo de Usuario
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pt-5 pl-6 pr-6 pb-4"
        >
          <div>
            <Label htmlFor="inputValue" className="block text-gray-600 text-sm font-semibold mb-2">Usuario</Label>
            <Input
              type="text"
              placeholder="Escriba su 'usuario'..."
              {...register('usuario')}
            />
            {error && (
              <p className="text-red-600">{error}</p>
            )}
          </div>

          <div className='flex justify-en gap-5 mt-3'>
            <div>
              <Button
              type="button"
              onClick={onCancel}
              className='relative bg-white border-2 border-red-600 text-red-600 w-48 mb-2 hover:bg-red-600 hover:text-white flex items-center justify-center'
              >
                <FontAwesomeIcon
                icon={faAngleLeft}
                className='absolute left-3 text-lg'
                />
                <span>Cancelar</span>
               
              </Button>
            </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="relative bg-white border-2 border-red-600 text-red-600 w-48 mb-2 hover:bg-red-600 hover:text-white flex items-center justify-center"
            >
              <span>Aceptar</span>
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
  );
}
