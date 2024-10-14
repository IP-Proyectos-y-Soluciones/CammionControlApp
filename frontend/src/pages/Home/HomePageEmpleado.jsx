// 1) para APP PRO PRO

// import { Link } from 'react-router-dom'; // Importa Link
// import tanqueo from '../../assets/tanqueo3.jpg'
// import volqueta from '../../assets/volqueta.jpg'
// import camion from '../../assets/camion2.jpg'
// import documentacion from '../../assets/carpeta.jpg'

// export function HomePageEmpleado(){
//   return(
//     <div className='flex flex-col items-center gap-17 mt-10 min-h-screen'>
//       <div className='card-container'>
//         <Link to='/volquetas/planilla/add'>
//         <div className='relative card w-full h-full'>
//         <img src={volqueta} alt='imgVolquetas' className='rounded-lg w-full h-full object-cover small-img'/>
//         <span className='absolute bottom-3 left-0 text-white p-4 text-xl'>VOLQUETA FORMULARIO</span>
//         </div>
//         </Link> 
//       </div>

//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card w-full h-full'>
//         <img src={camion} alt='imgCamion' className='rounded-lg w-full h-full object-cover' />
//         <span className='absolute bottom-3 left-0 text-white p-4 text-xl'>CARGA PESADA FORMULARIO</span>
//         </div>
//         </Link>
//       </div>

//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card w-full h-full'>
//         <img src={tanqueo} alt='imgTanqueo' className='rounded-lg w-full h-full object-cover'/>
//         <span className='absolute bottom-3 left-0 text-white p-4 text-xl'>TANQUEO FORMULARIO</span>
//         </div>
//         </Link>
//       </div>

//       <div className='card-container'>
//         <Link to='/refueling/planilla/add'>
//         <div className='relative card w-full h-full'>
//         <img src={documentacion} alt='imgTanqueo' className='rounded-lg w-full h-full object-cover'/>
//         <span className='absolute bottom-3 left-0 text-white p-4 text-xl'>DOCUMENTACIÓN</span>
//         </div>
//         </Link>
//       </div>
    
//     </div>
//   )
// }

// 2) para YADIRA MAYAC

import { Link } from 'react-router-dom'; // Importa Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faGasPump, faTruckFront, faFileAlt} from "@fortawesome/free-solid-svg-icons";

export function HomePageEmpleado() {
  return (
    <div className="p-8 min-h-screen">     
      
      <div className="flex flex-col grid grid-cols-2 gap-4 mt-10 md:gap-6 lg:gap-8 lg:mt-12">
        <div className='flex justify-center'>
        <Link
          to="/volquetas/planilla/add"
          className="btn-container"
        >                
          <span className="btn-title">FORMULARIO DE CARGA PESADA</span>      
          <FontAwesomeIcon icon={faTruckFront} className="btn-icon" />
        </Link>
        </div>

        <div className='flex justify-center'>
        <Link
          to="/volquetas/planilla/add"
          className='btn-container'
        >               
          <span className="btn-title">FORMULARIO DE VOLQUETAS</span>      
          <FontAwesomeIcon icon={faTruck} className="btn-icon" />
        </Link>
        </div>

        <div className='flex justify-center'>
        <Link
          to="/refueling/planilla/add"
          className='btn-container'
        >        
          <span className="btn-title">FORMULARIO DE TANQUEO</span>      
          <FontAwesomeIcon icon={faGasPump} className="btn-icon" />      
        </Link>    
        </div>

        <div className='flex justify-center'>
        <Link
          to="/refueling/planilla/add"
          className='btn-container'
        >
          <span className="btn-title">DOCUMENTACIÓN</span>              
          <FontAwesomeIcon icon={faFileAlt} className="btn-icon" />      
        </Link>      
        </div>
      </div>
    </div>
  );
}



// 3) service con botones rojos redirije a los formularios de mari

// import { Link } from 'react-router-dom'; // Importa Link
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight, faTruck, faGasPump, faTruckFront } from "@fortawesome/free-solid-svg-icons";

// export function HomePageEmpleado() {
//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">     
      
//       <div className="flex flex-col items-center space-y-10">
//         <Link
//           to="/formTractomulas"
//           className="flex items-center justify-between bg-white text-red-600 px-6 py-3 rounded-full shadow-xl hover:bg-red-600 hover:text-white transition-colors relative"
//           style={{ width: 'auto', minWidth: '500px' }}
//         >
//           <FontAwesomeIcon icon={faTruckFront} className="text-2xl mr-3" />      
//           <span className="flex-grow text-center ">CARGA PESADA</span>      
//           <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
//         </Link>

//         <Link
//           to="/formVolquetas"
//           className="flex items-center justify-between bg-white  text-red-600 px-6 py-3 rounded-full shadow-xl hover:bg-red-600 hover:text-white transition-colors relative"
//           style={{ width: 'auto', minWidth: '500px' }}
//         >
//           <FontAwesomeIcon icon={faTruck} className="text-2xl mr-3" />      
//           <span className="flex-grow text-center text-red-600 hover:text-white">VOLQUETAS</span>      
//           <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
//         </Link>

//         <Link
//           to="/formTanqueos"
//           className="flex items-center justify-between bg-white text-red-600 px-6 py-3 rounded-full shadow-xl hover:bg-red-600 hover:text-white transition-colors relative"
//           style={{ width: 'auto', minWidth: '500px' }}
//         >
//           <FontAwesomeIcon icon={faGasPump} className="text-2xl mr-3" />      
//           <span className="flex-grow text-center text-red-600 hover:text-white">TANQUEO</span>      
//           <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
//         </Link>      
//       </div>
//     </div>
//   );
// }
