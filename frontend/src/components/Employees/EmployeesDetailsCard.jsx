/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getEmployeeByIdRequest } from '../../../api/employees';
import { getDriverLicenseByIDRequest } from '../../../api/driverLicense';

export function EmployeesDetailsCard({ employee: initialEmployee }) {
  const [employee, setEmployee] = useState(initialEmployee);
  const [license, setLicense] = useState({
    lic_number: '',
    category: '',
    type_of_vehicle: '',
    type_of_service: '',
    date_of_issue: '',
    expiration_date: '',
});
  const [hasLicense, setHasLicense] = useState(false);
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

        const licenseID = response.data.licencias[0] ;

        if(licenseID !== undefined) {
          const getLicenseData =
          await getDriverLicenseByIDRequest(licenseID);

          setLicense({
            lic_number: getLicenseData.data.response.licencia_N,
            category: getLicenseData.data.response.categoria,
            type_of_vehicle:
                getLicenseData.data.response.clase_de_vehiculo,
            type_of_service: getLicenseData.data.response.servicio,
            date_of_issue:
                getLicenseData.data.response.fecha_expedicion,
            expiration_date:
                getLicenseData.data.response.fecha_vencimiento,
          });

          setHasLicense(true);
        }
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee by id:', error);
        setLicense({
          lic_number: '',
          category: '',
          type_of_vehicle: '',
          type_of_service: '',
          date_of_issue: '',
          expiration_date: '',
        });
        setHasLicense(false);
      } finally {
        setLoading(false);
      }
    };

    if (!initialEmployee) {
      searchEmployee();
    } else {
      setLoading(false);
      setLicense({
        lic_number: '',
        category: '',
        type_of_vehicle: '',
        type_of_service: '',
        date_of_issue: '',
        expiration_date: '',
      });
      setHasLicense(false);
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

        <hr className="h-0.5 border-0 bg-gray-400 mb-3" />

        <h3 className='text-xl font-bold text-gray-800 mb-3'>
          Licencia de conducir
        </h3>

        <hr className="h-0.5 border-0 bg-gray-400 mb-3" />

        {hasLicense ? (
          <>
          <p className='text-gray-700 text-base mb-3'>
            Nro: <b>{license.lic_number}</b>
          </p>

          <p className='text-gray-700 text-base mb-3'>
            Categoría: <b>{license.category}</b>
          </p>

          <p className='text-gray-700 text-base mb-3'>
            Clase de Vehículo: <b>{license.type_of_vehicle}</b>
          </p>

          <p className='text-gray-700 text-base mb-3'>
            Servicio: <b>{license.type_of_service}</b>
          </p>

          <p className='text-gray-700 text-base mb-3'>
            Expedición:{' '}<b>{formatDate(license.date_of_issue)}</b>
            </p>

          <p className='text-gray-700 text-base mb-3'>
            Vencimiento:{' '}<b>{formatDate(license.expiration_date)}</b>
            </p>
          </>
        ) : (
          <>
          <p className='text-gray-700 text-base mb-2'>
            <h4>No posee licencia de conducir</h4>
          </p>
          </>
        )}
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
