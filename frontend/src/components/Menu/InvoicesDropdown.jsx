/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const InvoicesDropdown = (setMenuOpen) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const { isAuthenticated } = useAuth();
    const menuRef = useRef(null);
    const subMenuRef = useRef(null);

    const toggleMenu = () => {
        //setIsOpen(!isOpen);
        setIsOpen((prev)=>!prev)
    };

    const toggleSubMenu = () => {
        //setIsSubMenuOpen(!isSubMenuOpen);
        setIsSubMenuOpen((prev)=>!prev);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
            setIsSubMenuOpen(false); // Cerrar el submenú si se hace clic fuera del menú...
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
        setIsSubMenuOpen(false);
        setMenuOpen(false);
    }

    return (
        <div className="ml-4" ref={menuRef}>
            <div className={`navbar transition-all ${isOpen ? 'text-yellow-400': ''}duration-300`}>
                <button 
                onClick={toggleMenu} 
                className={`pt-5 text-white font-bold flex justify-between items-center transition-all md:hover:scale-110 hover:text-yellow-400 ${isOpen ? 'text-yellow-400 z-20 sm:z-30 relative' : ''} duration-300`}
                >
                <span className='text-left pr-2'>Recibos</span>
                <FontAwesomeIcon
                icon={faAngleRight}
                className='ml-1 hidden md:pt-3 sm:inline sm:mb-3'
                />
            </button>
            </div>

            {isOpen && (
                <>
                <div className='fixed inset-0 bg-gray bg-opacity-90 z-10'></div>
                 <div className='fixed sm:top-2.5 sm:left-12 md:left-0 md:top-0 w-full h-full md:bg-black md:bg-opacity-80 z-20 flex flex-col items-start justify-start space-y-4 text-white p-24' onClick={toggleMenu}>
                 <div className='md:mt-6 md:space-y-2 md:ml-0'>
                    {isAuthenticated ? (
                        <>
                            <Link
                                to={'/imgheavyload'}
                                onClick={handleCloseMenu}
                                className="customSubMenu"
                            >
                                Mostrar todos "Carga Pesada"
                            </Link>

                            <Link
                                to={'/imgvolq'}
                                onClick={handleCloseMenu}
                                className="customSubMenu"
                            >
                                Mostrar todos "Volquetas"
                            </Link>

                            <Link
                                to={'/imgrefueling'}
                                onClick={handleCloseMenu}
                                className="customSubMenu"
                            >
                                Mostrar todos "Tanqueos"
                            </Link>

                            <hr className="bg-white border-white h-0.3 mt-2 mb-1 w-screen" />

                            <div
                                className="relative"
                                onMouseEnter={toggleSubMenu}
                                onMouseLeave={toggleSubMenu}
                            >
                                <button
                                    onClick={toggleSubMenu}
                                    className={`customSubMenu flex items-center justify-between ${isSubMenuOpen ? 'text-yellow-400' : ''}`}
                                >
                                    <span className='text-lg font-normal' >Buscar Recibo Por...</span>
                                    <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className='ml-2 mt-3 text-xl sm:inline sm:mb-6'
                                    />
                                </button>

                                {isSubMenuOpen && (
                                    <div
                                        ref={subMenuRef}
                                        className="relative sm:ml-44"
                                    >
                                        <Link
                                            to={'/search/heavyload'}
                                            onClick={handleCloseMenu}
                                            className="customSubMenu block px-4 py-2 text-white hover:text-yellow-400"
                                        >
                                            Carga Pesada
                                        </Link>

                                        <Link
                                            to={'/search/volq'}
                                            onClick={handleCloseMenu}
                                            className="customSubMenu block px-4 py-2 text-white hover:text-yellow-400"
                                        >
                                            Volquetas
                                        </Link>

                                        <Link
                                            to={'/search/refueling'}
                                            onClick={handleCloseMenu}
                                            className="customSubMenu block px-4 py-2 text-white hover:text-yellow-400"
                                        >
                                            Tanqueos
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* <Link
                                onClick={() => setIsOpen(false)}
                                className="customSubMenu"
                            >
                                Buscar Recibo...
                            </Link> */}
                        </>
                    ) : (
                        <p className="block px-4 py-2 text-sm text-gray-400">
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
