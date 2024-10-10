import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const EmployeeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const menuRef = useRef(null);

  const toggleMenu = () => {
   // setIsOpen(!isOpen);
   setIsOpen((prev)=>!prev)
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target)){
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Agregar el listener cuando el componente se monta...
    document.addEventListener('click', handleClickOutside);

    // Limpiar el listener cuando el componente se desmonta...
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <div className={`navbar transition-all ${isOpen?'text-yellow-400':''}duration-300`}>
      <button
        onClick={toggleMenu}
        className={`pt-5 text-white font-bold flex justify-between items-center transition-all md:hover:scale-110 hover:text-yellow-400 ${isOpen ? 'text-yellow-400 z-20 sm:z-30 relative': ''}`}
      >
      <span className='text-left pr-2'>Personal</span>
      <FontAwesomeIcon
      icon={faAngleRight}
      className='ml-1 hidden sm:inline'
      />
      </button>
      </div>

      {isOpen && (
        <>
        <div className='fixed inset-0 bg-gray bg-opacity-90 z-10' onClick={()=>setIsOpen(false)}></div>
          <div className='fixed sm:top-2.5 sm:left-12 md:left-0 md:top-0 w-full h-full md:bg-black md:bg-opacity-80 z-20 flex flex-col items-start justify-start space-y-4 text-white p-24'>
          <div className='md:mt-6 md:space-y-2 md:ml-0'>
          {isAuthenticated ? (
            <>
              <Link
                to={'/employees'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm  hover:text-yellow-400"
              >
                Mostrar todos...
              </Link>  

              <hr className='bg-white border-white h-0.3 mt-2 mb-1 w-screen'/>

              <Link
                to={'employees/add'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-yellow-400"
              >
                Agregar nuevo...
              </Link>              
           
              <Link
                to={'/employees/bydni'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-yellow-400"
              >
                Buscar por cédula...
              </Link>             

              <hr className='bg-white border-white h-0.3 mt-2 mb-1 w-screen'/>

              <Link
                to={'/employees/employee/edit'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-yellow-400"
              >
                Actualizar Empleado...
              </Link>
              <Link
              // to={'/employees/employee/del'}
              onClick={()=> setIsOpen(false)}
              className='customSubMenu'
              >
              Eliminar Empleado...
              </Link>
            </>
          ) : (
            <p className="block px-4 py-2 text-sm hover:text-white">
              Debe estar loggeado para acceder...!
            </p>
          )}
        </div>
        </div>
        </>
      )}
    </div>
  );
};


// import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';

// export const EmployeeDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { isAuthenticated } = useAuth();
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative" ref={menuRef}>
//       {/* Cambia la clase de la navbar cuando el menú está abierto */}
//       <div className={`navbar transition-all ${isOpen ? 'bg-black' : 'bg-white'} duration-500`}>
//         <button
//           onClick={toggleMenu}
//           className="pt-5 font-bold transition-all md:hover:scale-110 md:hover:text-gray-700 sm:hover:text-yellow-400"
//         >
//           Personal
//         </button>
//       </div>

//       {isOpen && (
//         <>
//           {/* Fondo negro que cubre toda la pantalla */}
//           <div className="fixed inset-0 bg-black bg-opacity-90 z-10" onClick={() => setIsOpen(false)}></div>
          
//           {/* Línea divisora roja entre la navbar y el submenu */}
//           <div className="w-full h-1 bg-red-600 animate-grow"></div>

//           <div className="fixed top-20 left-0 w-full h-full bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center space-y-4 text-white">
//             {isAuthenticated ? (
//               <>
//                 <Link
//                   to={'/employees/add'}
//                   onClick={() => setIsOpen(false)}
//                   className="block px-4 py-2 text-sm hover:text-yellow-400"
//                 >
//                   Agregar nuevo...
//                 </Link>
//                 <Link
//                   to={'/employees'}
//                   onClick={() => setIsOpen(false)}
//                   className="block px-4 py-2 text-sm hover:text-yellow-400"
//                 >
//                   Mostrar todos...
//                 </Link>
//                 <Link
//                   to={'/employees/bydni'}
//                   onClick={() => setIsOpen(false)}
//                   className="block px-4 py-2 text-sm hover:text-yellow-400"
//                 >
//                   Buscar por cédula...
//                 </Link>
//                 <Link
//                   to={'/employees/employee/edit'}
//                   onClick={() => setIsOpen(false)}
//                   className="block px-4 py-2 text-sm hover:text-yellow-700"
//                 >
//                   Actualizar Empleado...
//                 </Link>
//               </>
//             ) : (
//               <p className="block px-4 py-2 text-sm hover:text-white">
//                 Debe estar loggeado para acceder...!
//               </p>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
