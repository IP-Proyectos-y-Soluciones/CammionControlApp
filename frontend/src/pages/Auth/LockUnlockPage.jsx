import { Button, Input, Label } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { unlockUser } from '../../../api/admin';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import swal2 from 'sweetalert2';

export function LockUnlockPage() {
  const { register, handleSubmit } = useForm();
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
        navigate('/employees');
      }
    } catch (error) {
      setError('Usuario inválido o inexistente...!');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-gray-800 max-w-md w-full p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold italic mb-6 text-blue-300">
          Desbloqueo de Usuario
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <Label htmlFor="inputValue" className='text-white'>Usuario</Label>
          <Input
            type="text"
            placeholder="Escriba su 'usuario'..."
            className='w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            {...register('usuario')}
          />
          {error && <p className="text-red-600">{error}</p>}

          <Button
            type="submit"
            className="w-full mt-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
          >
            Aceptar
          </Button>
        </form>
      </div>
    </div>
  );
}
