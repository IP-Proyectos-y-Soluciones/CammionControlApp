/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const EmployeeFormDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated } = useAuth();
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
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
            <button onClick={toggleMenu} className="pt-5 text-white font-bold block hover:scale-110 hover:text-gray-700 transition-all sm:hover:text-yellow-400">
                Empleado
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-red-700 text-white rounded-md shadow-2xl z-10">
                    {isAuthenticated ? (
                        <>
                            <Link
                                to={'volquetas/planilla/add'}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-sm hover:text-gray-700 hover:bg-white "
                            >
                                Nueva planilla Volquetas
                            </Link>                       
                            <Link
                                to={'refueling/planilla/add'}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-sm hover:text-gray-700 hover:bg-white "
                            >
                                Nueva planilla Tanqueo
                            </Link>
                        </>
                    ) : (
                        <p className="block px-4 py-2 text-sm text-red-700">
                            Debe estar loggeado para acceder...!
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};
