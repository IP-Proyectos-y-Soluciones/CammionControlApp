import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function UserProfileDetail() {
    const { userName, dni, email, telefono } = useAuth();
    const navigate = useNavigate();

    const handleCardClick = () => {
         navigate('/general_access')
    };

    return (
        <div 
        className="p-8 bg-gray-100 min-h-screen"
        onClick={handleCardClick}
        >
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md cursor-pointer" onClick={handleCardClick}>
                <h2 className="text-2xl text-gray-600 font-semibold mb-4">
                    {userName || 'Nombre de Usuario'}
                </h2>

                <div className="mb-4 text-gray-600">
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faIdCard} className='mr-2' />
                        <strong className="underline">Cédula:</strong> {dni || 'N/A'}
                    </div>
                </div>

                <div className="mb-4 text-gray-600">
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                        <strong className="underline">Correo:</strong> {email || 'N/A'}
                    </div>
                </div>

                <div className="mb-4 text-gray-600">
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faPhone} className='mr-2' />
                        <strong className="underline">Teléfono:</strong> {telefono || 'N/A'}
                    </div>
                </div>
            </div>
        </div>
    );
}















// /* eslint-disable react/prop-types */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBirthdayCake, faIdCard, faEnvelope, faPhone, faFile } from '@fortawesome/free-solid-svg-icons';
// import { useAuth } from '../../context/AuthContext'; // Asumiendo que estás usando un contexto para obtener el empleado

// export function UserProfileDetail() {
//   const { userName } = useAuth(); // Obtiene los detalles del empleado del contexto
//   console.log('aquiuiui', userName)

//   const formatDate = (dateString) => {
//     if (!dateString) return 'N/A';
//     const date = new Date(dateString);
//     return `${date.getUTCDate().toString().padStart(2, '0')}-${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
//   };

//   const handleCardClick = () => {
//     // Aquí puedes implementar la lógica para manejar el clic en la tarjeta
//     console.log('Card clicked');
//   };

//   if (!employee) {
//     return <p>Cargando...</p>;
//   }

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md cursor-pointer" onClick={handleCardClick}>
//         <h2 className="text-2xl text-gray-600 font-semibold mb-4">
//           {employee.nombres || 'Nombre'} {employee.apellidos || 'Apellido'}
//         </h2>

//         <div className="mb-4 text-gray-600">
//           <div className='flex items-center'>
//             <FontAwesomeIcon icon={faIdCard} className='mr-2' />
//             <strong className="underline">Cédula:</strong> {employee.cedula || 'N/A'}
//           </div>
//           <hr className='border-gray-300 my-1' />
//         </div>

//         <div className="mb-4 text-gray-600">
//           <div className='flex items-center'>
//             <FontAwesomeIcon icon={faBirthdayCake} className='mr-2' />
//             <strong className="underline">Fecha de Nacimiento:</strong> {formatDate(employee.fecha_nacimiento)}
//           </div>
//           <hr className='border-gray-300 my-1' />
//         </div>

//         <div className="mb-4 text-gray-600">
//           <div className='flex items-center'>
//             <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
//             <strong className="underline">Correo:</strong> {employee.correo || 'N/A'}
//           </div>
//         </div>

//         <div className="mb-4 text-gray-600">
//           <div className='flex items-center'>
//             <FontAwesomeIcon icon={faPhone} className='mr-2' />
//             <strong className="underline">Teléfono:</strong> {employee.telefono || 'N/A'}
//           </div>
//         </div>

//         <div className="mb-4 text-gray-600">
//           <div className='flex items-center'>
//             <FontAwesomeIcon icon={faFile} className='mr-2' />
//             <strong className="underline">Fecha de Inicio de Contrato:</strong> {formatDate(employee.fecha_inicio_contrato)}
//           </div>
//         </div>

//         {employee.fecha_final_contrato && (
//           <div className="mb-4 text-gray-600">
//             <div className='flex items-center'>
//               <FontAwesomeIcon icon={faFile} className='mr-2' />
//               <strong className="underline">Fecha Final de Contrato:</strong> {formatDate(employee.fecha_final_contrato)}
//             </div>
//           </div>
//         )}

//         <div className="mb-4 text-gray-600">
//           <div className='flex items-center'>
//             <FontAwesomeIcon icon={faFile} className='mr-2' />
//             <strong className="underline">Tipo de Contrato:</strong> {employee.tipo_de_contrato || 'N/A'}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useQuery } from '@tanstack/react-query';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBirthdayCake, faIdCard, faEnvelope, faPhone, faFile } from '@fortawesome/free-solid-svg-icons';

// // Función para obtener los datos del usuario desde el backend
// const fetchUser = async (usuarioId) => {
//   const response = await axios.get(`/api/usuarios/${usuarioId}`);
//   return response.data;
// };

// const UserProfileDetail = () => {
//   const { usuarioId } = useParams(); // Obtener el usuarioId de la URL

//   const { data: user, error, isLoading } = useQuery({
//     queryKey: ['user', usuarioId],
//     queryFn: () => fetchUser(usuarioId),
//     enabled: !!usuarioId // Solo ejecuta la consulta si usuarioId existe
//   });

//   if (isLoading) {
//     return <div>Cargando...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!user) {
//     return <div>No se encontró información del usuario.</div>;
//   }

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl text-gray-600 font-bold text-center mb-6">Detalle del Perfil de Usuario</h1>
//       <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl text-gray-600 font-semibold mb-4">{user.nombres} {user.apellidos}</h2>
        
//         <div className="mb-4 text-gray-600">
//           <div className='flex items-center'>
//             <FontAwesomeIcon icon={faIdCard} className='mr-2' />
//             <strong className="underline">Cédula:</strong> {user.cedula}
//           </div>
//           <hr className='border-gray-300 my-1'/>
//         </div>

//         <div className="mb-4 text-gray-600">
//           <div className='flex items-center'>
//             <FontAwesomeIcon icon={faBirthdayCake} className='mr-2' />
//             <strong className="underline">Fecha de Nacimiento:</strong> {new Date(user.fecha_nacimiento).toLocaleDateString()}
//           </div>
//           <hr className='border-gray-300 my-1' />
//         </div>

//         <div className="mb-4 text-gray-600">
//           <div className='flex items-center'>
//             <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
//             <strong className="underline">Correo:</strong> {user.correo}
//           </div>
//         </div>

//         <div className="mb-4 text-gray-600">
//           <div className='flex items-center'>
//             <FontAwesomeIcon icon={faPhone} className='mr-2' />
//             <strong className="underline">Teléfono:</strong> {user.telefono}
//           </div>
//         </div>

//         <div className="mb-4 text-gray-600">
//           <div className='flex items-center'>
//             <FontAwesomeIcon icon={faFile} className='mr-2' />
//             <strong className="underline">Fecha de Inicio de Contrato:</strong> {new Date(user.fecha_inicio_contrato).toLocaleDateString()}
//           </div>
//         </div>

//         {user.fecha_final_contrato && (
//           <div className="mb-4 text-gray-600">
//             <div className='flex items-center'>
//               <FontAwesomeIcon icon={faFile} className='mr-2' />
//               <strong className="underline">Fecha Final de Contrato:</strong> {new Date(user.fecha_final_contrato).toLocaleDateString()}
//             </div>
//           </div>
//         )}

//         <div className="mb-4 text-gray-600">
//           <div className='flex items-center'>
//             <FontAwesomeIcon icon={faFile} className='mr-2' />
//             <strong className="underline">Tipo de Contrato:</strong> {user.tipo_de_contrato}
//           </div>
//         </div>

//         <h3 className="text-xl text-gray-600 font-bold mt-6 mb-4">Documentos</h3>
        
//         <div className="flex flex-col">
//           {user.licencias && user.licencias.length > 0 && (
//             <div className="mb-4 text-gray-600">
//               <strong className="underline">Licencias:</strong>
//               <ul>
//                 {user.licencias.map((licencia, index) => (
//                   <li key={index}>
//                     <img src={licencia.url} alt={`Licencia ${index + 1}`} className="w-32 h-20 object-cover text-gray-600" />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {user.vehiculos && user.vehiculos.length > 0 && (
//             <div className="mb-4 text-gray-600">
//               <strong className="underline">Vehículos:</strong>
//               <ul>
//                 {user.vehiculos.map((vehiculo, index) => (
//                   <li key={index}>
//                     {vehiculo.nombre} (ID: {vehiculo._id})
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {user.volquetas && user.volquetas.length > 0 && (
//             <div className="mb-4 text-gray-600">
//               <strong className="underline">Volquetas:</strong>
//               <ul>
//                 {user.volquetas.map((volqueta, index) => (
//                   <li key={index}>
//                     {volqueta.nombre} (ID: {volqueta._id})
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {user.tanqueos && user.tanqueos.length > 0 && (
//             <div className="mb-4 text-gray-600">
//               <strong className="underline">Tanqueos:</strong>
//               <ul>
//                 {user.tanqueos.map((tanqueo, index) => (
//                   <li key={index}>
//                     {tanqueo.fecha} (ID: {tanqueo._id})
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfileDetail;
