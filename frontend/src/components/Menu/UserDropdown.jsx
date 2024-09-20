import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

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
        className="pt-1 text-white hover:text-red-600 transition-colors"
      >
        Usuario
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-10">
          {isAuthenticated ? (
            <>
              <Link
                to={'/users/add'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                Nuevo Usuario...
              </Link>
              <Link
                to={'/users'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                Todos los ...
              </Link>
              <Link
                // to={'/employees/search'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                Buscar Usuario...
              </Link>
              <Link
                // to={'/employees/search'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                Actualizar...
              </Link>
              <Link
                // to={'/employees/search'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                Bloquear Usuario...
              </Link>
              <Link
                to={'/users/admin/lock-unlock'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                Desbloquar Usuario...
              </Link>
              <Link
                // to={'/employees/search'}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                Eliminar...
              </Link>
            </>
          ) : (
            <p className="block px-4 py-2 text-sm text-white">
              Debe estar loggeado para acceder...!
            </p>
          )}
        </div>
      )}
    </div>
  );
};
