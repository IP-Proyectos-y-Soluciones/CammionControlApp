/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../UI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const VehicleFormDropdown = (setMenuOpen) => {
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

    const handleCloseMenu = (e) =>{
        e.stopPropagation();
        setIsOpen(false);
        setMenuOpen(false);
    }

    return (
        <div className="relative" ref={menuRef}>
            <div className={`navbar transition-all ${isOpen ? 'text-yellow-400': ''}duration-300`}>
            <button 
            onClick={toggleMenu} 
            className={`pt-5 text-white font-bold flex justify-between items-center transition-all md:hover:scale-110 hover:text-yellow-400 ${isOpen ? 'text-yellow-400 z-20 sm:z-30 relative' : 'text-white'}`}
            >
            <span className='text-left pr-2'>Vehículos</span>
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
                                to={'/driverlicenses/add'}
                                onClick={handleCloseMenu}
                                className="block px-4 py-2 text-sm hover:text-yellow-400"
                            >
                                Registrar Licencia
                            </Link>

                            <hr className="my-2 border-gray-400 w-screen" />

                            <Link
                                to={'/vehicles/planilla/add'}
                                onClick={handleCloseMenu}
                                className="block px-4 py-2 text-sm hover:text-yellow-400"
                            >
                                Registro Nuevo Vehículo
                            </Link>

                            <Link
                                to={'/vehicles'}
                                onClick={handleCloseMenu}
                                className="block px-4 py-2 text-sm hover:text-yellow-400"
                            >
                                Mostrar Flota
                            </Link>

                            <Link
                                to={'/vehicles/vehassign'}
                                onClick={handleCloseMenu}
                                className="block px-4 py-2 text-sm hover:text-yellow-400"
                            >
                                Asignación de Vehículo
                            </Link>

                            <hr className="my-2 border-gray-400 w-screen" />

                            <Link
                                to={'/documents/add'}
                                onClick={handleCloseMenu}
                                className="block px-4 py-2 text-sm hover:text-yellow-400"
                            >
                                Registrar Documento
                            </Link>
                        </>
                    ) : (
                        <p className="block px-4 py-2 text-sm text-gray-700">
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
