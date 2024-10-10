//import { Link } from 'react-router-dom'; // Importa Link
import { CardLink } from './CardLink';

export function HomePageAdmin() {
  return (
    <div className='flex justify-center items-start gap-20 min-h-screen mx-8 mt-4'>      
      <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold mb-4'>Personal</h2>
        <div className='grid grid-cols-2 gap-8'>
          <CardLink to='/employees' title='LISTA DEL PERSONAL' />
          <CardLink to='/employees/add' title='AGREGAR PERSONAL' />
          <CardLink to='/employees/bydni' title='BUSCAR POR CÉDULA' />
          <CardLink to='/employees/employee/edit' title='ACTUALIZAR EMPLEADO' />
          <CardLink to='/employees/employee/del' title='ELIMINAR EMPLEADO' />
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold mb-4'>Usuario</h2>
        <div className='grid grid-cols-2 gap-8'>
          <CardLink to='/users/add' title='NUEVO USUARIO' />
          <CardLink to='/users' title='TODOS LOS USUARIOS' />
          <CardLink to='/employees/search' title='BUSCAR USUARIO' />
          <CardLink to='/employees/search' title='ACTUALIZAR' />
          <CardLink to='/employees/search' title='BLOQUEAR USUARIO' />
          <CardLink to='/users/admin/lock-unlock' title='DESBLOQUEAR USUARIO' />
          <CardLink to='/employees/search' title='ELIMINAR USUARIO' />
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold mb-4'>Vehículos</h2>
        <div className='grid grid-cols-2 gap-8'>
          <CardLink to='/driverlicenses/add' title='REGISTRAR LICENCIA' />
          <CardLink to='/vehicles/planilla/add' title='REGISTRO NUEVO VEHÍCULO' />
          <CardLink to='/vehicles' title='MOSTRAR FLOTA' />
          <CardLink to='/vehicles/vehassign' title='ASIGNACIÓN DE VEHÍCULO' />
          <CardLink to='/documents/add' title='REGISTRAR DOCUMENTO' />
        </div>
      </div>
    </div>
  );
}


// import { Link } from 'react-router-dom'; // Importa Link

// export function HomePageAdmin(){
//   return(
//     <div className='flex flex-col items-center gap-10 mt-10 min-h-screen'>
//      <div>
//         <h2 className='text-2xl font-bold mb-4'>Personal</h2>
//       <div className='grid grid-cols-2'>
//         <Link to='/volquetas/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>LISTA DEL PERSONAL</span>
//         </div>
//         </Link> 
//       </div>

//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>AGREGAR PERSONAL</span>
//         </div>
//         </Link>
//       </div>

//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>BUSCAR POR CÉDULA</span>
//         </div>
//         </Link>
//       </div>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>ACTUALIZAR EMPLEADO</span>
//         </div>
//         </Link>
//       </div>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>ELIMINAR EMPLEADO</span>
//         </div>
//         </Link>
//       </div>
//       </div>

//       <hr className='border border-red-800'></hr>

//       <div>
//       <h2>Usuario</h2>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>NUEVO USUARIO</span>
//         </div>
//         </Link>
//       </div>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>TODOS LOS USUARIOS</span>
//         </div>
//         </Link>
//       </div>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>BUSCAR USUARIO</span>
//         </div>
//         </Link>
//       </div>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>ACTUALIZAR</span>
//         </div>
//         </Link>
//       </div>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>BLOQUEAR USUARIO</span>
//         </div>
//         </Link>
//       </div>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>DESBLOQUEAR USUARIO</span>
//         </div>
//         </Link>
//       </div>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>ELIMINAR USUARIO</span>
//         </div>
//         </Link>
//       </div>
//       </div>

//      <div> 
//         <h2>Vehiculos</h2>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>REGISTRAR LICENCIA</span>
//         </div>
//         </Link>
//       </div>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>REGISTRO NUEVO VEHICULO</span>
//         </div>
//         </Link>
//       </div>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>MOSTARR FLOTA</span>
//         </div>
//         </Link>
//       </div>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>ASIGNACION DE VEHICULO</span>
//         </div>
//         </Link>
//       </div>
//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card'>
//         <span className='absolute bottom-0 left-0 text-white p-2'>REGISTRAR DOCUMENTO</span>
//         </div>
//         </Link>
//       </div>
//       </div>
    
//     </div>
//   )
// }

// 2 services con botones rojos redirije a los form de Manu

// import { Link } from 'react-router-dom'; // Importa Link
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight, faTruck, faGasPump, faTruckFront } from "@fortawesome/free-solid-svg-icons";

// export function HomePage() {
//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">     
      
//       <div className="flex flex-col items-center space-y-4">
//         <Link
//           to="/formTractomulas"
//           className="flex items-center justify-between bg-white text-red-600 px-6 py-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-colors relative"
//           style={{ width: 'auto', minWidth: '500px' }}
//         >
//           <FontAwesomeIcon icon={faTruckFront} className="text-2xl mr-3" />      
//           <span className="flex-grow text-center">CARGA PESADA</span>      
//           <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
//         </Link>

//         <Link
//           to="/formVolquetas"
//           className="flex items-center justify-between bg-white  text-red-600 px-6 py-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-colors relative"
//           style={{ width: 'auto', minWidth: '500px' }}
//         >
//           <FontAwesomeIcon icon={faTruck} className="text-2xl mr-3" />      
//           <span className="flex-grow text-center">VOLQUETAS</span>      
//           <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
//         </Link>

//         <Link
//           to="/formTanqueos"
//           className="flex items-center justify-between bg-white text-red-600 px-6 py-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-colors relative"
//           style={{ width: 'auto', minWidth: '500px' }}
//         >
//           <FontAwesomeIcon icon={faGasPump} className="text-2xl mr-3" />      
//           <span className="flex-grow text-center">TANQUEO</span>      
//           <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
//         </Link>      
//       </div>
//     </div>
//   );
// }