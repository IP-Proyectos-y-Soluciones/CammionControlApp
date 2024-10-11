/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para la navegación
//import logo from '../assets/logosinfondo.png'
import logo from '../../assets/yadiraLogoBlanco.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  // const handleProfileClick = () => {
  //   navigate('/employees/employee/:_id'); // Redirige a la página del perfil del usuario
  // };

  return (
    <header className="flex bg-red-600 items-center justify-between p-2 h-20">
      <button
        className="text-xl p-2 rounded-full hover:bg-white"
        onClick={handleBackClick}
      >
        <FontAwesomeIcon
          icon={faArrowLeft} 
          className="h-6 w-6 text-gray-800"
        />
      </button>

      <div className="flex-1 text-center">
        <img
          className="h-28 mx-auto cursor-pointer"
          src={logo}
          alt="Company Logo"          
        />
      </div>
      
      <div
        className="flex items-center cursor-pointer p-2 rounded-full hover:bg-white"
       // onClick={handleProfileClick}
      >
        
        <FontAwesomeIcon
          icon={faUser} 
          className="h-8 w-8 text-gray-800"
        />

      </div>
    </header>
  );
};

export default Header;
