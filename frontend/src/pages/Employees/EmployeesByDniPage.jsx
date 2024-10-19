/*
  Código modificado (híbrido)...
*/
import { Button, Input, Label } from '../../components/UI';
import { useState } from 'react';
import { getEmployeeByDniRequest, deleteEmployeeByDniRequest } from '../../../api/employees';
import { EmployeesDetailsCard } from '../../components/Employees/EmployeesDetailsCard';
import { Loading } from '../../components/Common/Loading';
//import { useForm } from 'react-hook-form';
//import { useNavigate } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import '../../styles/global.css'

export function EmployeeByDniPage() {
  const [cedula, setCedula] = useState('');
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 // const {reset} =useForm();
 // const navigate =useNavigate();

  const handleInputChange = (e) => {
    setCedula(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setEmployee(null);

    try {
      const response = await getEmployeeByDniRequest(cedula);

      setEmployee(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false)
      setError('Empleado no encontrado...!!!');
    } finally {
      setLoading(false);
    }
  };

  //Para eliminar el empleado...
  const handleDelete = async (e) =>{
    e.preventDefault();
  
  //Confirmación de la eliminación por medio de un sweetalert...
  const result = await Swal.fire({
    title: '¿Está seguro...?',
    text: 'Esta acción eliminará al empleado. ¡No se puede revertir...!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar...',
    cancelButtonText: 'No, cancelar...',
    reverseButtons: true,
  });

  if(result.isConfirmed){
    try {
      await deleteEmployeeByDniRequest(cedula);

      Swal.fire({
        title: 'Eliminado',
        text: 'El empleado ha sido eliminado exitosamente.',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      //se resetea el formnulario y limpiar los estados
      setCedula('');
      setEmployee(null);
      setError(null);      
    } catch (error) {
      //Mostarr mensaje de error
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al eliminar al empleado.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }else{
    //Resetear el formulario si el usuario cancela...
    setCedula('')
    setEmployee(null);
    setError(null);
  }
}

  // const onCancel =()=>{
  //   reset(),
  //   navigate('/employees')
  // }

  return (
    <div className='bg-otherpages min-h-screen'>
      {loading && (
        <div>
          <Loading />
        </div>
      )}{' '}
      {/* Se renderiza si es true... */}
      <div className="customDiv-1a">
        <div className="customDiv-2">
          <div className="customDivH2">
            <h2 className="customH2">
              Buscar / Eliminar Empleado por Cédula
            </h2>
          </div>
          <form className="customFormDiv pt-5 pl-6 pr-6 pb-4" onSubmit={handleSearch}>
            <div>
              <div>
                <Label htmlFor="cedula" className="block text-gray-700 text-sm font-semibold mb-2">Cédula</Label>
                <Input
                  type="number"
                  value={cedula}
                  onChange={handleInputChange}
                  placeholder="Ingrese el nro de cédula..."
                />
              </div>
            </div>

            {/* <div className='flex justify-end gap-5 mt-3'> */}
             <div className='customButtonContainer'> 
              <div>
                {/*Boton para eliminar empleado*/}
                {employee ?? (
                  <div>
                  <Button
                  onClick={handleDelete}
                  className='rounded-md btn-formularios'
                  >
                   <span className='text-red-700'>Eliminar Empleado</span>
                  </Button>
                 </div>
                )}
             </div>
             
             <div>
              {/* Botón para buscar empleado*/}
              <Button
                type='submit'
                className='rounded-md btn-formularios h-[calc(4.2rem-1mm)]'
                >
                  <span className='text-red-700'>Buscar</span>
              </Button>
{/* 
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
                onClick={handleSearch}
                className="rounded-md"
              >
                <span className='text-red-700'>Aceptar</span>
                <FontAwesomeIcon
                icon={faAngleRight}
                className='absolute right-3 text-lg'
                />
              </Button> */}
             </div>
            </div>
          </form>
        </div>
      </div>
      {/* Mostrar el mensaje de carga, error o detalles del empleado... */}
      {loading && <p>Loading...</p>}
      {error && (
        <p className="text-red-600 mt-4">{error}</p>
      )}
      {employee && (
        <div className="mt-10 w-full">
          <EmployeesDetailsCard employee={employee} />
        </div>
      )}
    </div>
  );
}
