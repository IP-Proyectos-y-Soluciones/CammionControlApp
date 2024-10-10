import PropTypes from 'prop-types'; // Importa PropTypes
import { Link } from 'react-router-dom';

export function CardLink ({ to, title }) {
  return (
    <Link to={to} className='relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-95 lg:w-96 lg:h-16 md:w-52 md:h-32 lg:mb-2'>
      <div className='bg-gradient-to-r from-gray-800 to-red-700 p-4 text-white w-full h-full flex items-center justify-center'>
        <h3 className='text-lg font-semibold'>{title}</h3>
      </div>
    </Link>
  );
}

// Validación de Props
CardLink.propTypes = {
  to: PropTypes.string.isRequired, // Asegura que 'to' es una cadena y es requerida
  title: PropTypes.string.isRequired, // Asegura que 'title' es una cadena y es requerida
};
