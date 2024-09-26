
import { EmployeesList } from '../../components/Employees/EmployeesList';

export function EmployeesPage() {
  return (
    <div className="container mx-auto p-4 bg-otherpages min-h-screen">
      <h1 className="text-2xl text-gray-800 font-bold italic mb-4">
        Listado de Empleados
      </h1>
      <EmployeesList />
    </div>
  );
}
