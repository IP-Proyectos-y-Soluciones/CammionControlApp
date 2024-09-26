import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const navigate = useNavigate(); // Obtén la función navigate

  const handleBackClick = () => {
    navigate(-1); // Navega a la página anterior
  };

  return (
    <footer className="flex justify-center items-center p-4 bg-red-600">
      <button
        className="text-xl p-2 rounded hover:bg-gray-600"
        onClick={handleBackClick}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="h-6 w-6 text-white-600"
        />
      </button>
    </footer>
  );
};

export default Footer;




// const Footer = () => {
//   const handleLogout = () => {
//     // Implementar la lógica de logout aquí
//     console.log('Logging out');
//   };

//   return (
//     <footer className="flex justify-center items-center p-4 bg-gray-200">
//       <img
//         className="h-8 cursor-pointer hover:bg-gray-300 p-2 rounded"
//         src="/path-to-logout-logo.png"
//         alt="Logout"
//         onClick={handleLogout}
//       />
//     </footer>
//   );
// };

// export default Footer;



// const Footer = () => {
//   const handleLogout = () => {
//     // Implementar la lógica de logout aquí
//     console.log('Logging out');
//   };

//   return (
//     <footer className="flex justify-center items-center p-4 bg-gray-200">
//       <img
//         className="h-8 cursor-pointer hover:bg-gray-300 p-2 rounded"
//         src="/path-to-logout-logo.png"
//         alt="Logout"
//         onClick={handleLogout}
//       />
//     </footer>
//   );
// };

// export default Footer;
