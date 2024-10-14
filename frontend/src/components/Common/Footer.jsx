
const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-60">
    <footer className=" bg-transparent text-gray-600 py-4">
    <div className="container mx-auto text-center">
      <p>
        &copy; {new Date().getFullYear()} Desarrollado por {''}
        <a
        //href="https://mariana8819.github.io/"
         href=""
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-red-500"
        >
          IP Proyectos y Soluciones
        </a>
      </p>
    </div>
    </footer>
    </div>
  );
};

export default Footer;

// import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// const Footer = () => {
//   const navigate = useNavigate(); // Obtén la función navigate
  
//   const handleBackClick = () => {
//     navigate(-1); // Navega a la página anterior
//   };

//   return (
//     <footer className="flex justify-center items-center p-4 bg-red-600">
//       <button
//         className="text-xl p-2 rounded hover:bg-gray-600"
//         onClick={handleBackClick}
//       >
//         <FontAwesomeIcon
//           icon={faArrowLeft}
//           className="h-6 w-6 text-white-600"
//         />
//       </button>
//     </footer>
//   );
// };

// export default Footer;

