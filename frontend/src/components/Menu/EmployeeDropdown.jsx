import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const EmployeeDropdown = () => {
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
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="pt-5 font-bold hover:scale-110 hover:text-gray-700 transition-all"
      >
        Personal
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-red-700 text-white rounded-md shadow-2xl z-10">
          {isAuthenticated ? (
            <>
              <Link
                to={'employees/add'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-gray-700 hover:bg-white"
              >
                Agregar nuevo...
              </Link>              
              <Link
                to={'/employees'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-gray-700 hover:bg-white"
              >
                Mostrar todos...
              </Link>             
              <Link
                to={'/employees/bydni'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-gray-700 hover:bg-white"
              >
                Buscar por cédula...
              </Link>             
              <Link
                to={'/employees/employee/edit'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm hover:text-gray-700 hover:bg-white"
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
      )}
    </div>
  );
};
