import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Agregar el listener cuando el componente se monta...
    document.addEventListener('click', handleClickOutside);

    // Limpiar el listener cuando el componente se desmonta...
    return () => {
      document.removeEventListener(
        'click',
        handleClickOutside,
      );
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="pt-5 text-white font-bold flex justify-between items-center md:hover:scale-110 md:hover:text-gray-700 transition-all sm:w-full sm:hover:bg-white sm:hover:text-gray-700"
      >
       <span className='text-left pr-2'>Usuario</span>
       <FontAwesomeIcon
       icon={faAngleRight}
       className='ml-2 hidden sm:inline'
       />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-red-700 text-white rounded-md shadow-2xl z-10">
          {isAuthenticated ? (
            <>
              <Link
                to={'/users/add'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-gray-700 hover:bg-white "
              >
                Nuevo Usuario...
              </Link>            
              <Link
                to={'/users'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-gray-700 hover:bg-white "
              >
                Todos los ...
              </Link>            
              <Link
                // to={'/employees/search'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-gray-700 hover:bg-white "
              >
                Buscar Usuario...
              </Link>           
              <Link
                // to={'/employees/search'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-gray-700 hover:bg-white "
              >
                Actualizar...
              </Link>              
              <Link
                // to={'/employees/search'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-gray-700 hover:bg-white "
              >
                Bloquear Usuario...
              </Link>           
              <Link
                to={'/users/admin/lock-unlock'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-gray-700 hover:bg-white "
              >
                Desbloquar Usuario...
              </Link>             
              <Link
                // to={'/employees/search'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-gray-700 hover:bg-white "
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
      )}
    </div>
  );
};
