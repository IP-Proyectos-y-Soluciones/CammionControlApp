import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

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
      <div className={`navbar transition-all ${isOpen?'bg-black opacity-80':''}duration-300`}>
      <button
        onClick={toggleMenu}
        // className={`navbar transition-all ${isOpen ?'bg-black opacity-80 text-yellow-400': ''} duration-300 pt-5 font-bold md:hover:scale-110 md:hover:text-gray-700 sm:hover:text-yellow-400`}
        className={`pt-5 text-white bg-transparent font-bold transition-all md:hover:scale-110 hover:text-yellow-400 ${isOpen ? 'text-yellow-400 z-20 sm:z-30 relative': 'text-white'}`}
      >
        Personal
      </button>
      </div>

      {isOpen && (
        <>
        <div className='fixed inset-0 bg-black bg-opacity-90 z-10' onClick={()=>setIsOpen(false)}></div>
        {/* <div className='w-full h-1 bg-red-600 animate-grow'></div> */}
        {/*  <div className="absolute right-0 mt-2 w-48 bg-red-700 text-white rounded-md shadow-2xl z-10 sm:bg-black sm:opacity-80 sm:w-screen "> */}
          <div className='fixed top-20 left-0 w-full h-full bg-black bg-opacity-80 z-20 flex flex-col items-start justify-start space-y-4 text-white p-24'>
          {isAuthenticated ? (
            <>
              <Link
                to={'employees/add'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-yellow-400"
              >
                Agregar nuevo...
              </Link>              
              <Link
                to={'/employees'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm  hover:text-yellow-400"
              >
                Mostrar todos...
              </Link>             
              <Link
                to={'/employees/bydni'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-yellow-400"
              >
                Buscar por cédula...
              </Link>             
              <Link
                to={'/employees/employee/edit'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-yellow-400"
              >
                Actualizar Empleado...
              </Link>
            </>
          ) : (
            <p className="block px-4 py-2 text-sm hover:text-white">
              Debe estar loggeado para acceder...!
            </p>
          )}
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
