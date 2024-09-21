import { useEffect, useState } from 'react';
import { showAllEmployeesRequest } from '../../../api/employees';
import { useNavigate } from 'react-router-dom';

export function EmployeesList() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const searchEmployees = async () => {
            try {
                const response = await showAllEmployeesRequest();
                setEmployees(response.data);
            } catch (error) {
                //console.error('Error fetching employees:', error);

                if (error.response) {
                    const statusCode = error.response.status;

                    console.error('Código de error de status: ', statusCode);
                    //
                    switch (statusCode) {
                        case 401:
                            navigate('/unauthorized');
                            break;
                        case 404:
                            setError('No se encontraron empleados...!');
                            break;
                        case 500:
                            setError(
                                'Error en el servidor. Por favor, inténtalo más tarde...!',
                            );
                            break;
                        default:
                            setError(
                                'Error desconocido. Favor contactar con el desarrollador de la app...!',
                            );
                            break;
                    }
                }
            } finally {
                setLoading(false);
            }
        };

        searchEmployees();
    }, [navigate]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;

        // return new Date(dateString).toISOString().split('T')[0];
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 text-gray-600">
                <thead className="text-gray-600 border-b-4">
                    <tr>
                        <th className="px-4 py-2 border-b">Cédula</th>
                        <th className="px-4 py-2 border-b">Nombres</th>
                        <th className="px-4 py-2 border-b">Apellidos</th>
                        <th className="px-4 py-2 border-b">
                            Fecha de Nacimiento
                        </th>
                        <th className="px-4 py-2 border-b">
                            Inicio de Contrato
                        </th>
                        <th className="px-4 py-2 border-b">Tipo de Contrato</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr
                            key={employee._id}
                            className="border-b-4 cursor-pointer"
                            onClick={() => navigate(`employee/${employee._id}`)}
                        >
                            <td className="px-4 py-2 border-b pl-10">
                                {employee.cedula}
                            </td>
                            <td className="px-4 py-2 border-b pl-20">
                                {employee.nombres}
                            </td>
                            <td className="px-4 py-2 border-b pl-28">
                                {employee.apellidos}
                            </td>
                            <td className="px-4 py-2 border-b pl-20">
                                {formatDate(employee.fecha_nacimiento)}
                            </td>
                            <td className="px-4 py-2 border-b pl-20">
                                {/* {new Date(
                  employee.fecha_inicio_contrato,
                ).toLocaleDateString()} */}
                                {formatDate(employee.fecha_inicio_contrato)}
                            </td>
                            <td className="px-4 py-2 border-b pl-16">
                                {employee.tipo_de_contrato}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
