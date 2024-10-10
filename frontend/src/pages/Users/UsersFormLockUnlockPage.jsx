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
              className='rounded-md'
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
              className="rounded-md"
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
  );
}
