// // 1) para App PRO PRO

// import { useState } from 'react';
// import { CardLink } from './CardLink';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

// export function HomePageAdmin() {
//   const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

//   const toggleSubMenu = () =>{
//      setIsSubMenuOpen((prev)=> !prev);
//   }

//   return (
//     <div className='flex flex-col min-h-screen'>
//     <div className='flex justify-center items-start md:gap-44 sm:gap-6 min-h-screen mx-0 mt-4'>      
//       <div className='flex flex-col items-center'>
//         <h2 className='text-2xl font-bold mb-4'>Personal</h2>
//         <div className='grid md:grid-cols-1 gap-40 sm:grid-cols-1 sm:gap-4'>
//           <CardLink to='/employees' title='LISTA DEL PERSONAL' />
//           <CardLink to='/employees/add' title='AGREGAR PERSONAL' />
//           <CardLink to='/employees/bydni' title='BUSCAR POR CÉDULA' />
//           <CardLink to='/employees/employee/edit' title='ACTUALIZAR EMPLEADO' />
//           <CardLink to='/employees/bydni' title='ELIMINAR EMPLEADO' />
//         </div>
//       </div>

//       <div className='flex flex-col items-center'>
//         <h2 className='text-2xl font-bold mb-4'>Usuario</h2>
//         <div className='grid md:grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-4'>
//           <CardLink to='/users/add' title='NUEVO USUARIO' />
//           <CardLink to='/users' title='TODOS LOS USUARIOS' />
//           <CardLink to='/employees/search' title='BUSCAR USUARIO' />
//           <CardLink to='/employees/search' title='ACTUALIZAR' />
//           <CardLink to='/employees/search' title='BLOQUEAR USUARIO' />
//           <CardLink to='/users/admin/lock-unlock' title='DESBLOQUEAR USUARIO' />
//           <CardLink to='/users/user/byuser' title='ELIMINAR USUARIO' />
//         </div>
//       </div>

//       <div className='flex flex-col items-center'>
//         <h2 className='text-2xl font-bold mb-4'>Vehículos</h2>
//         <div className='grid md:grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-4'>
//           <CardLink to='/driverlicenses/add' title='REGISTRAR LICENCIA' />
//           <CardLink to='/vehicles/planilla/add' title='REGISTRO NUEVO VEHÍCULO' />
//           <CardLink to='/vehicles' title='MOSTRAR FLOTA' />
//           <CardLink to='/vehicles/vehassign' title='ASIGNACIÓN DE VEHÍCULO' />
//           <CardLink to='/documents/add' title='REGISTRAR DOCUMENTO' />
//         </div>
//       </div>

//       <div className='flex flex-col items-center'>
//         <h2 className='text-2xl font-bold mb-4'>Recibos</h2>
//         <div className='grid md:grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-4'>
//           <CardLink to='/imgheavyload' title='LISTA CARGA PESADAS' />
//           <CardLink to='/imgvolq' title='LISTA VOLQUETAS' />
//           <CardLink to='/imgrefueling' title='LISTA TANQUEOS' />
//           <div className='relative '>
//             <Link
//             to='#'                    //No se navega directamente aqui, solo activa el submenu
//             onClick={toggleSubMenu}
//             className={`block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-95 lg:w-96 lg:h-16 md:w-52 md:h-32 lg:mb-2 bg-gradient-to-r from-red-950 to-red-600 p-4 text-white font-bold w-full h-full flex items-center justify-center rounded-md ${isSubMenuOpen ? 'text-yellow-400' : ''}`}
//             >
//               <span className='text-lg font-normal'>BUSCAR RECIBO POR ...</span>
//               <FontAwesomeIcon
//               icon={faAngleDown}
//               className='ml-2'
//               />
//             </Link>

//             {isSubMenuOpen && (
//               <div className='absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md z-20 w-full'>
//                 <Link to={'/search/heavyload'} className='relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-95 bg-gradient-to-r from-red-950 to-red-600 p-4 text-white'>
//                 CARGA PESADA
//                 </Link>
//                 <Link to={'/search/volq'} className='relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-95 bg-gradient-to-r from-red-950 to-red-600 p-4 text-white'>
//                 VOLQUETAS
//                 </Link>
//                 <Link to={'/search/refueling'} className='relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-95 bg-gradient-to-r from-red-950 to-red-600 p-4 text-white'>
//                 TANQUEOS
//                 </Link>
//                 </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
    
//   );
// }


// 2)para YADIRA MAYAC 

import { CardLink } from './CardLink';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function HomePageAdmin() {

const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

const toggleSubMenu = () =>{
   setIsSubMenuOpen((prev)=> !prev);
}
  return (
    <div className='flex flex-col min-h-screen'>
    <div className='flex justify-center items-start md:gap-44 sm:gap-6 min-h-screen mx-0 mt-4'>      
      <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold mb-4'>Personal</h2>
        <div className='grid md:grid-cols-1 gap-40 sm:grid-cols-1 sm:gap-4'>
          <CardLink to='/employees' title='LISTA DEL PERSONAL' />
          <CardLink to='/employees/add' title='AGREGAR PERSONAL' />
          {/* <CardLink to='/employees/bydni' title='BUSCAR POR CÉDULA' /> */}
          {/* <CardLink to='/employees/employee/edit' title='ACTUALIZAR EMPLEADO' /> */}
          <CardLink to='/employees/bydni' title='ELIMINAR EMPLEADO' />
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold mb-4'>Usuario</h2>
        <div className='grid md:grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-4'>
          <CardLink to='/users/add' title='NUEVO USUARIO' />
          <CardLink to='/users' title='TODOS LOS USUARIOS' />
          {/* <CardLink to='/employees/search' title='BUSCAR USUARIO' /> */}
          {/* <CardLink to='/employees/search' title='ACTUALIZAR' /> */}
          {/* <CardLink to='/employees/search' title='BLOQUEAR USUARIO' /> */}
          {/* <CardLink to='/users/admin/lock-unlock' title='DESBLOQUEAR USUARIO' /> */}
          <CardLink to='/users/user/byuser' title='ELIMINAR USUARIO' />
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold mb-4'>Vehículos</h2>
        <div className='grid md:grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-4'>
          <CardLink to='/driverlicenses/add' title='REGISTRAR LICENCIA' />
          <CardLink to='/vehicles/planilla/add' title='REGISTRO NUEVO VEHÍCULO' />
          <CardLink to='/vehicles' title='MOSTRAR FLOTA' />
          <CardLink to='/vehicles/vehassign' title='ASIGNACIÓN DE VEHÍCULO' />
          <CardLink to='/documents/add' title='REGISTRAR DOCUMENTO' />
        </div>
      </div>

<div className='flex flex-col items-center'>
<h2 className='text-2xl font-bold mb-4'>Recibos</h2>
<div className='grid md:grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-4'>
  <CardLink to='/imgheavyload' title='LISTA CARGA PESADAS' />
  <CardLink to='/imgvolq' title='LISTA VOLQUETAS' />
  <CardLink to='/imgrefueling' title='LISTA TANQUEOS' />
  <div className='relative '>
    <Link
    to='#'                    //No se navega directamente aqui, solo activa el submenu
    onClick={toggleSubMenu}
    className={`block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-95 lg:w-96 lg:h-16 md:w-52 md:h-32 lg:mb-2 bg-gradient-to-r from-red-950 to-red-600 p-4 text-white font-bold w-full h-full flex items-center justify-center rounded-md ${isSubMenuOpen ? 'text-yellow-400' : ''}`}
    >
      <span className='text-lg font-normal'>BUSCAR RECIBO POR ...</span>
      <FontAwesomeIcon
      icon={faAngleDown}
      className='ml-2'
      />
    </Link>

    {isSubMenuOpen && (
      <div className='absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md z-20 w-full'>
        <Link to={'/search/heavyload'} className='relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-95 bg-gradient-to-r from-red-950 to-red-600 p-4 text-white'>
        CARGA PESADA
        </Link>
        <Link to={'/search/volq'} className='relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-95 bg-gradient-to-r from-red-950 to-red-600 p-4 text-white'>
        VOLQUETAS
        </Link>
        <Link to={'/search/refueling'} className='relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-95 bg-gradient-to-r from-red-950 to-red-600 p-4 text-white'>
        TANQUEOS
        </Link>
        </div>
    )}
  </div>
</div>
</div>
    </div>
    </div>
    
  );
}

