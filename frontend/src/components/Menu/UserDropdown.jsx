// 1) Para APP PRO PRO

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const UserDropdown = (setMenuOpen) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    //setIsOpen(!isOpen);
    setIsOpen((prev)=>!prev);
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

  const handleCloseMenu = (e) =>{
    e.stopPropagation();
    setIsOpen(false);
    setMenuOpen(false);
  }

  return (
    <div className="relative" ref={menuRef}>
      <div className={`navbar transition-all ${isOpen?'text-yellow-400':''}duration-300`}>
      <button
        onClick={toggleMenu}
        className={`pt-5 text-white font-bold flex justify-between items-center transition-all md:hover:scale-110 hover:text-yellow-400 ${isOpen ? 'text-yellow-400 z-20 sm:z-30 relative': 'text-white'}`}
      >
       <span className='text-left pr-2'>Usuario</span>
       <FontAwesomeIcon
       icon={faAngleRight}
       className='ml-1 hidden sm:inline md:mb-0 sm:mb-3'
       />
      </button>
      </div>

      {isOpen && (
        <>
        <div className='fixed inset-0 bg-gray bg-opacity-90 z-10'></div>
        <div className='fixed sm:top-2.5 sm:left-12 md:left-0 md:top-0 w-full h-full md:bg-black md:bg-opacity-80 z-20 flex flex-col items-start justify-start space-y-4 text-white p-24' onClick={toggleMenu}>
        <div className="md:mt-6 md:space-y-2 md:ml-0">
          {isAuthenticated ? (
            <>
              <Link
                to={'/users'}
                onClick={handleCloseMenu}
                className="block px-4 py-2 text-sm hover:text-yellow-400"
              >
                Todos los ...
              </Link>

              <hr className="bg-slate-300 h-0.5" />

              <Link
                to={'/users/add'}
                onClick={handleCloseMenu}
                className="block px-4 py-2 text-sm hover:text-yellow-400"
              >
                Nuevo Usuario...
              </Link>            
            
              <Link
                to={'/users/user/byuser'}
                onClick={handleCloseMenu}
                className="block px-4 py-2 text-sm hover:text-yellow-400"
              >
                Buscar Usuario ...
              </Link>            
              {/* <Link
                // to={'/employees/search'}
                onClick={handleCloseMenu}
                className="block px-4 py-2 text-sm hover:text-yellow-400"
              >
                Actualizar...
              </Link>               */}

                <hr className="bg-slate-300 h-0.5" />

              <Link
                to={'/users/admin/disable-user'}
                onClick={handleCloseMenu}
                className="block px-4 py-2 text-sm hover:text-yellow-400"
              >
                Bloquear Usuario...
              </Link>           
              <Link
                to={'/users/admin/unlock-user'}
                onClick={handleCloseMenu}
                className="block px-4 py-2 text-sm hover:text-yellow-400"
              >
                Desbloquar Usuario...
              </Link>             
              <Link
                // to={'/employees/search'}
                onClick={handleCloseMenu}
                className="block px-4 py-2 text-sm hover:text-yellow-400"
              >
                Eliminar...
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


// 2) Para YADIRA MAYAC

// import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

// export const UserDropdown = (setMenuOpen) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { isAuthenticated } = useAuth();
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     //setIsOpen(!isOpen);
//     setIsOpen((prev)=>!prev);
//   };

//   const handleClickOutside = (event) => {
//     if (
//       menuRef.current &&
//       !menuRef.current.contains(event.target)){
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     // Agregar el listener cuando el componente se monta...
//     document.addEventListener('click', handleClickOutside);

//     // Limpiar el listener cuando el componente se desmonta...
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   const handleCloseMenu = (e) =>{
//     e.stopPropagation();
//     setIsOpen(false);
//     setMenuOpen(false);
//   }

//   return (
//     <div className="relative" ref={menuRef}>
//       <div className={`navbar transition-all ${isOpen?'text-yellow-400':''}duration-300`}>
//       <button
//         onClick={toggleMenu}
//         className={`pt-5 text-white font-bold flex justify-between items-center transition-all md:hover:scale-110 hover:text-yellow-400 ${isOpen ? 'text-yellow-400 z-20 sm:z-30 relative': 'text-white'}`}
//       >
//        <span className='text-left pr-2'>Usuario</span>
//        <FontAwesomeIcon
//        icon={faAngleRight}
//        className='ml-1 hidden sm:inline md:mb-0 sm:mb-3'
//        />
//       </button>
//       </div>

//       {isOpen && (
//         <>
//         <div className='fixed inset-0 bg-gray bg-opacity-90 z-10'></div>
//         <div className='fixed sm:top-2.5 sm:left-12 md:left-0 md:top-0 w-full h-full md:bg-black md:bg-opacity-80 z-20 flex flex-col items-start justify-start space-y-4 text-white p-24' onClick={toggleMenu}>
//         <div className="md:mt-6 md:space-y-2 md:ml-0">
//           {isAuthenticated ? (
//             <>
//               <Link
//                 to={'/users/add'}
//                 onClick={handleCloseMenu}
//                 className="block px-4 py-2 text-sm hover:text-yellow-400"
//               >
//                 Nuevo Usuario...
//               </Link>            
//               <Link
//                 to={'/users'}
//                 onClick={handleCloseMenu}
//                 className="block px-4 py-2 text-sm hover:text-yellow-400"
//               >
//                 Todos los ...
//               </Link>            
//               {/* <Link
//                 // to={'/employees/search'}
//                 onClick={handleCloseMenu}
//                 className="block px-4 py-2 text-sm hover:text-yellow-400"
//               >
//                 Buscar Usuario...
//               </Link>            */}
//               {/* <Link
//                 // to={'/employees/search'}
//                 onClick={handleCloseMenu}
//                 className="block px-4 py-2 text-sm hover:text-yellow-400"
//               >
//                 Actualizar...
//               </Link>               */}
//               {/* <Link
//                 // to={'/employees/search'}
//                 onClick={handleCloseMenu}
//                 className="block px-4 py-2 text-sm hover:text-yellow-400"
//               >
//                 Bloquear Usuario...
//               </Link>            */}
//               {/* <Link
//                 to={'/users/admin/lock-unlock'}
//                 onClick={handleCloseMenu}
//                 className="block px-4 py-2 text-sm hover:text-yellow-400"
//               >
//                 Desbloquar Usuario...
//               </Link>              */}
//               <Link
//                 // to={'/employees/search'}
//                 onClick={handleCloseMenu}
//                 className="block px-4 py-2 text-sm hover:text-yellow-400"
//               >
//                 Eliminar...
//               </Link>
//             </>
//           ) : (
//             <p className="block px-4 py-2 text-sm hover:text-white">
//               Debe estar loggeado para acceder...!
//             </p>
//           )}
//         </div>
//         </div>
//         </>
//       )}
//     </div>
//   );
// };
