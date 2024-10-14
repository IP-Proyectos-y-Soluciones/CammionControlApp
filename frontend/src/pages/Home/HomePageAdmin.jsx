// 1) para App PRO PRO

import { CardLink } from './CardLink';

export function HomePageAdmin() {
  return (
    <div className='flex flex-col min-h-screen'>
    <div className='flex justify-center items-start md:gap-20 sm:gap-6 min-h-screen mx-8 mt-4'>      
      <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold mb-4'>Personal</h2>
        <div className='grid md:grid-cols-1 gap-40 sm:grid-cols-1 sm:gap-4'>
          <CardLink to='/employees' title='LISTA DEL PERSONAL' />
          <CardLink to='/employees/add' title='AGREGAR PERSONAL' />
          <CardLink to='/employees/bydni' title='BUSCAR POR CÉDULA' />
          <CardLink to='/employees/employee/edit' title='ACTUALIZAR EMPLEADO' />
          <CardLink to='/employees/employee/del' title='ELIMINAR EMPLEADO' />
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold mb-4'>Usuario</h2>
        <div className='grid md:grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-4'>
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
        <div className='grid md:grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-4'>
          <CardLink to='/driverlicenses/add' title='REGISTRAR LICENCIA' />
          <CardLink to='/vehicles/planilla/add' title='REGISTRO NUEVO VEHÍCULO' />
          <CardLink to='/vehicles' title='MOSTRAR FLOTA' />
          <CardLink to='/vehicles/vehassign' title='ASIGNACIÓN DE VEHÍCULO' />
          <CardLink to='/documents/add' title='REGISTRAR DOCUMENTO' />
        </div>
      </div>
    </div>
    </div>
    
  );
}


// 2)para YADIRA MAYAC 

// import { CardLink } from './CardLink';

// export function HomePageAdmin() {
//   return (
//     <div className='flex flex-col min-h-screen'>
//     <div className='flex justify-center items-start md:gap-20 sm:gap-6 min-h-screen mx-8 mt-4'>      
//       <div className='flex flex-col items-center'>
//         <h2 className='text-2xl font-bold mb-4'>Personal</h2>
//         <div className='grid md:grid-cols-1 gap-40 sm:grid-cols-1 sm:gap-4'>
//           <CardLink to='/employees' title='LISTA DEL PERSONAL' />
//           <CardLink to='/employees/add' title='AGREGAR PERSONAL' />
//           {/* <CardLink to='/employees/bydni' title='BUSCAR POR CÉDULA' /> */}
//           {/* <CardLink to='/employees/employee/edit' title='ACTUALIZAR EMPLEADO' /> */}
//           <CardLink to='/employees/employee/del' title='ELIMINAR EMPLEADO' />
//         </div>
//       </div>

//       <div className='flex flex-col items-center'>
//         <h2 className='text-2xl font-bold mb-4'>Usuario</h2>
//         <div className='grid md:grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-4'>
//           <CardLink to='/users/add' title='NUEVO USUARIO' />
//           <CardLink to='/users' title='TODOS LOS USUARIOS' />
//           {/* <CardLink to='/employees/search' title='BUSCAR USUARIO' /> */}
//           {/* <CardLink to='/employees/search' title='ACTUALIZAR' /> */}
//           {/* <CardLink to='/employees/search' title='BLOQUEAR USUARIO' /> */}
//           {/* <CardLink to='/users/admin/lock-unlock' title='DESBLOQUEAR USUARIO' /> */}
//           <CardLink to='/employees/search' title='ELIMINAR USUARIO' />
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
//     </div>
//     </div>
    
//   );
// }

