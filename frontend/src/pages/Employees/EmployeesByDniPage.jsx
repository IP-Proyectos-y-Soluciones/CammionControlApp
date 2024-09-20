/*
  Código modificado (híbrido)...
*/
import { Button, Input, Label } from '../../components/UI';
import { useState } from 'react';
import { getEmployeeByDniRequest } from '../../../api/employees';
import { EmployeesDetailsCard } from '../../components/Employees/EmployeesDetailsCard';
import { Loading } from '../../components/Common/Loading';

export function EmployeeByDniPage() {
  const [cedula, setCedula] = useState('');
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    } catch (error) {
      setError('Empleado no encontrado...!!!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && (
        <div>
          <Loading />
        </div>
      )}{' '}
      {/* Se renderiza si es true... */}
      <div className="flex flex-col items-center mt-12 mx-auto w-full max-w-md">
        <div className="bg-zinc-100 border-4 border-red-600 w-full p-0 rounded-md">
          <div className="bg-red-600 flex items-stretch">
            <h2 className="text-2xl font-bold italic ml-16 mb-2 text-gray-100">
              Buscar Empleado por Cédula
            </h2>
          </div>
          <form className="pt-5 pl-6 pr-6 pb-4">
            <div>
              <div>
                <Label htmlFor="cedula" className="block text-gray-600 text-sm font-semibold mb-2">Cédula</Label>
                <Input
                  type="number"
                  value={cedula}
                  onChange={handleInputChange}
                  placeholder="Ingrese el nro de cédula..."
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleSearch}
                className="bg-slate-500 w-1/3 mt-3 mb-4 hover:bg-slate-400"
              >
                Aceptar
              </Button>
            </div>
          </form>
        </div>
      </div>
      {/* Mostrar el mensaje de carga, error o detalles del empleado... */}
      {loading && <p>Loading...</p>}
      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}
      {employee && (
        <div className="mt-10 w-full">
          <EmployeesDetailsCard employee={employee} />
        </div>
      )}
    </div>
  );
}
