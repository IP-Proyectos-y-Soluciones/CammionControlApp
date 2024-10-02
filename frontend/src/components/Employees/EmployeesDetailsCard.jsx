/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {
  useNavigate,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getEmployeeByIdRequest } from '../../../api/employees';

export function EmployeesDetailsCard({ employee: initialEmployee }) {
  const [employee, setEmployee] = useState(initialEmployee);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { _id } = useParams();

  useEffect(() => {
    const searchEmployee = async () => {
      if (!_id) {
        setLoading(false);
        return;
      }

      try {
        const response = await getEmployeeByIdRequest(_id);
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee by id:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!initialEmployee) {
      searchEmployee();
    } else {
      setLoading(false);
    }
  }, [_id, initialEmployee]);

  const handleCardClick = () => {
    if (location.pathname.includes('/employees/bydni')) {
      navigate('/employees/bydni');
    } else {
      navigate('/employees');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;

    // return new Date(dateString).toISOString().split('T')[0];
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          {employee.nombres} {employee.apellidos}
        </h2>
        <hr className="h-0.5 border-0 bg-gray-400 mb-3" />
        <p className="text-gray-700 text-base mb-2">
          Cédula: <b>{employee.cedula}</b>
        </p>
        <p className="text-gray-700 text-base mb-2">
          Fecha de Nacimiento:{' '}
          <b>{formatDate(employee.fecha_nacimiento)}</b>
        </p>
        <p className="text-gray-700 text-base mb-2">
          Correo: <b>{employee.correo}</b>
        </p>
        <p className="text-gray-700 text-base mb-2">
          Teléfono: <b>{employee.telefono}</b>
        </p>
        <p className="text-gray-700 text-base mb-2">
          Inicio de Contrato:{' '}
          <b>
            {formatDate(employee.fecha_inicio_contrato)}
          </b>
        </p>
        {employee.fecha_final_contrato && (
          <p className="text-gray-700 text-base mb-2">
            Finalización de Contrato:{' '}
            <b>
              {formatDate(employee.fecha_final_contrato)}
            </b>
          </p>
        )}
        <p className="text-gray-700 text-base mb-2">
          Tipo de Contrato: <b>{employee.tipo_de_contrato}</b>
        </p>
      </div>
    </div>
  );
}


//   return (
//     <div
//       className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
//       onClick={handleCardClick}
//     >
//       <div className="p-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-3">
//           {employee.nombres} {employee.apellidos}
//         </h2>
//         <hr className="h-0.5 border-0 bg-gray-400 mb-3" />

//         <div className='flex items-center mb-2'>
//           <i className='fas fa-id-card text-gray-500 mr-2'></i>
//         <p className="text-gray-700 text-base">
//           Cédula: <b>{employee.cedula}</b>
//         </p>
//         </div>

//         <div className='flex items-center mb-2'>
//           <i className='fas fa-id-card text-gray-500 mr-2'></i>
//         <p className="text-gray-700 text-base">
//           Fecha de Nacimiento:{' '}
//           <b>{formatDate(employee.fecha_nacimiento)}</b>
//         </p>
//         </div>

//         <p className="text-gray-700 text-base mb-2">
//           Correo: <b>{employee.correo}</b>
//         </p>
//         <p className="text-gray-700 text-base mb-2">
//           Teléfono: <b>{employee.telefono}</b>
//         </p>
//         <p className="text-gray-700 text-base mb-2">
//           Inicio de Contrato:{' '}
//           <b>
//             {formatDate(employee.fecha_inicio_contrato)}
//           </b>
//         </p>
//         {employee.fecha_final_contrato && (
//           <p className="text-gray-700 text-base mb-2">
//             Finalización de Contrato:{' '}
//             <b>
//               {formatDate(employee.fecha_final_contrato)}
//             </b>
//           </p>
//         )}
//         <p className="text-gray-700 text-base mb-2">
//           Tipo de Contrato: <b>{employee.tipo_de_contrato}</b>
//         </p>
//       </div>
//     </div>
//   );
// }
