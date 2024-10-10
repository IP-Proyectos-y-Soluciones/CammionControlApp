/*
  Código modificado (híbrido)...
*/
import { Button, Input, Label } from '../../components/UI';
import { useState } from 'react';
import { getEmployeeByDniRequest } from '../../../api/employees';
import { EmployeesDetailsCard } from '../../components/Employees/EmployeesDetailsCard';
import { Loading } from '../../components/Common/Loading';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export function EmployeeByDniPage() {
  const [cedula, setCedula] = useState('');
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {reset} =useForm();
  const navigate =useNavigate();

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

  const onCancel =()=>{
    reset(),
    navigate('/employees')
  }

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
              Buscar Empleado por Cédula
            </h2>
          </div>
          <form className="customFormDiv pt-5 pl-6 pr-6 pb-4">
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
                onClick={handleSearch}
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
