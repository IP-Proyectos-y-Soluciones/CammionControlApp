
import { Link } from 'react-router-dom'; // Importa Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTruck, faGasPump, faTruckFront } from "@fortawesome/free-solid-svg-icons";

export function HomePage() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
     
      
      <div className="flex flex-col items-center space-y-4">
        <Link
          to="/formTractomulas"
          className="flex items-center justify-between bg-white text-red-600 px-6 py-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-colors relative"
          style={{ width: 'auto', minWidth: '500px' }}
        >
          <FontAwesomeIcon icon={faTruckFront} className="text-2xl mr-3" />      
          <span className="flex-grow text-center">CARGA PESADA</span>      
          <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
        </Link>

        <Link
          to="/formVolquetas"
          className="flex items-center justify-between bg-white  text-red-600 px-6 py-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-colors relative"
          style={{ width: 'auto', minWidth: '500px' }}
        >
          <FontAwesomeIcon icon={faTruck} className="text-2xl mr-3" />      
          <span className="flex-grow text-center">VOLQUETAS</span>      
          <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
        </Link>

        <Link
          to="/formTanqueos"
          className="flex items-center justify-between bg-white text-red-600 px-6 py-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-colors relative"
          style={{ width: 'auto', minWidth: '500px' }}
        >
          <FontAwesomeIcon icon={faGasPump} className="text-2xl mr-3" />      
          <span className="flex-grow text-center">TANQUEO</span>      
          <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
        </Link>      
      </div>
    </div>
  );
}
