// import { Link, useNavigate } from 'react-router-dom';
// import { logoutRequest } from '../../../api/auth';
// import { useAuth } from '../../context/AuthContext';
// import { EmployeeDropdown } from '../Menu/EmployeeDropdown';
// import { UserDropdown } from '../Menu/UserDropdown';
// import { EmployeeFormDropdown } from '../Menu/EmployeesFormDropdown';


// export function NavBarMain() {
//   const { logout, setIsAuthenticated, userRole, userName } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const response = await logoutRequest();
//       if (response.status === 200) {
//         logout();
//         navigate('/');
//       } else {
//         console.error('Error al cerrar sesión');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // const handleDashboardLink =()=>{
//   //   if
//   // } 

//   const isAuthorized =
//   userRole === import.meta.env.VITE_RAD ||
//   userRole === import.meta.env.VITE_ROW;


//   return (
//     <nav className="bg-gray-800 py-3 px-8 rounded-lg flex justify-between items-center">
//       <div>
//       <Link to={'/dashboard/admin'} className="text-2xl font-bold text-white">       
//           Dashboard Admin        
//       </Link>
//       </div>

//       <div className="flex items-center space-x-4">
//       <Link
//         to={'/login'}
//         className=" text-white px-4 py-2 hover:text-red-600 transition-colors"
//       >
//         Login
//       </Link>
//       {isAuthorized ?(
//         <>
//       <EmployeeDropdown />
//       <UserDropdown />
//        </>
//        ):(
//         <>
//             <Link
//                 to="/unauthorized"
//                  className="text-white px-4 py-2 hover:text-red-600 transition-colors"
//             >
//                 No Permitido...
//             </Link>
//             <Link  className="text-white px-4 py-2 hover:text-red-600 transition-colors">
//                <EmployeeFormDropdown />
//             </Link>
//         </>
//         )}
//       <Link
//         to={'/'}
//         className="text-white px-4 py-2  hover:text-red-600 transition-colors"
//       >
//         Inicio
//       </Link>


//       <Link
//         to={'/home'}
//         className="text-white px-4 py-2 hover:text-red-600 transition-colors"
//       >
//         Servicios
//       </Link>

//       <button
//         onClick={handleLogout}
//         className="text-white px-4 py-2 hover:text-red-600 transition-colors"
//       >
//         Logout
//       </button>
//       </div>
//     </nav>
//   );
// }






/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logoutRequest } from '../../../api/auth';
import { useAuth } from '../../context/AuthContext';
import { EmployeeDropdown } from '../Menu/EmployeeDropdown';
import { UserDropdown } from '../Menu/UserDropdown';
import { EmployeeFormDropdown } from '../Menu/EmployeesFormDropdown';
import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/yadiraLogoBlanco.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { VehicleFormDropdown } from '../Menu/VehicleFormDropdown';


export function NavBarMain() {
  const { logout, setIsAuthenticated, isAuthenticated, userRole, userName } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [employeeMenuOpen, setEmployeeMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
    

  const handleLogout = async () => {
    try {
      const response = await logoutRequest();
      if (response.status === 200) {
        logout();
        navigate('/');
      } else {
        console.error('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDashboardLink =()=>{
    if(userRole === 'Owner' || userRole === 'Admin'){
      return '/general_access_admin';
    }else if(userRole === 'Empleado'){
      return '/general_access';
    }else{
      return '/';
    }
  } 

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setEmployeeMenuOpen(false);
    setUserMenuOpen(false);
  }

  const handleCloseMenu=()=>{
    setMenuOpen(false);
    setEmployeeMenuOpen(false);
    setUserMenuOpen(false);
  }


  const handleEmployeeMenu = (event) =>{
    event.stopPropagation();
    setEmployeeMenuOpen(!employeeMenuOpen);
    setUserMenuOpen(false);
  }

  const handleUserMenu = (event) =>{
    event.stopPropagation();   //evita que el click cierre el menu principal
    setUserMenuOpen(!userMenuOpen);
    setEmployeeMenuOpen(false);
  }

  // const handleClickOutside = (event)=>{
  //   if(menuRef.current && !menuRef.current.contains(event.target)){
  //     setMenuOpen(false)
  //   }
  // }

  // useEffect(()=>{
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return ()=>{
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   }
  // },[]);

  const isAuthorized =
  userRole === import.meta.env.VITE_RAD ||
  userRole === import.meta.env.VITE_ROW;

  const isLandingPage = location.pathname === '/' | location.pathname === '/login';

  return (
    <nav 
    className={`${isLandingPage ? 'bg-opacity-70 backdrop-filter backdrop-blur-lg ' : 'bg-gradient-to-r from-red-950 to-red-600 bg-opacity-70'}
    py-2 px-8 rounded-lg flex justify-between items-center transition-all duration-300 
    ${menuOpen ? 'z-30' : 'z-20' }`}
    // "bg-red-700 py-3 px-8 rounded-lg flex justify-between items-center"
    >
      <div className='flex items-center space-x-4 ml-4'>
      <Link to={handleDashboardLink()} className="text-white flex items-center">       
        <img src={logo} alt='Company Logo' className={`h-[4.2rem] w-auto cursor-pointer transition-transform hover:scale-105 z-30
        ${menuOpen ? 'brightness-150': '' }`} />         
      </Link>
      </div>

       <div className='hidden md:flex md:items-center md:space-x-10'>
     {isAuthenticated ?(
      <>
      {isAuthorized ?(
        <>

         <div className='cursor-pointer'>
           <EmployeeDropdown />
         </div>        
         <div  className='cursor-pointer'>
           <UserDropdown />
         </div>
         <div  className='cursor-pointer'>
           <VehicleFormDropdown />
         </div>
      
       </>
       ):(         
       <EmployeeFormDropdown />
          )}
          <button
          onClick={handleLogout}
          className='pt-5 text-white font-bold block py-2 hover:scale-110 hover:text-yellow-400  transition-colors mt-2'
          >
            Cerrar Sesión
          </button>
          </>
        ) : (
      <>
       </>
     )}
    </div>

        <div className='hidden md:flex items-center space-x-2 mr-4'>
          {isAuthenticated ? (
            <span className='pt-2 text-white font-bold italic'>{userName}</span>       
          ):(
            <>
            <Link 
            to='/login'
            className='flex flex-col items-center text-white font-bold group transition-colors'
            >
              <div className='flex flex-col items-center justify-center w-20 h-20 bg-transparent border-4 border-white rounded-full group-hover:border group-hover:border-gray-800'>
              <FontAwesomeIcon
            icon={faUserAlt}
            className='h-8 w-8 text-white group-hover:text-gray-800'
            />
              <span className='transition-transform transform group-hover:scale-110 group-hover:text-gray-800 text-xs mt-1'>
                Ingresar
                </span>
              </div>
            </Link>
            </>
          )}
        </div>      

        <div className='flex items-center space-x-4 md:hidden'>
          <span className='text-white font-bol italic'>{userName}</span>
        <button className={`text-white hover:scale-110 ${menuOpen?'text-white':''} z-30`} onClick={handleMenuToggle} >
          <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className='h-6 w-6 mr-4'
          />
        </button>

        {menuOpen && (
          <>
          <div className='fixed inset-0 w-full h-full bg-black bg-opacity-80 z-20' onClick={handleCloseMenu}></div>
          <div className='menu-open-fullscreen z-50 border-t-4 border-red-600 text-white p-2 space-y-30'>
            {isAuthenticated ?(
              <>
               {isAuthorized ? (
                <>
                 <div onClick={handleEmployeeMenu} className='cursor-pointer pl-4 w-full hover:text-yellow-400'>
                   <EmployeeDropdown />
                 </div>
                 <div onClick={handleUserMenu} className='cursor-pointer pl-4 w-full hover:text-yellow-400'>
                   <UserDropdown />
                 </div>
                 <div onClick={handleUserMenu} className='cursor-pointer pl-4 w-full hover:text-yellow-400'>
                   <VehicleFormDropdown /> 
                 </div>                     
              </>
            ):(                   
              <EmployeeFormDropdown />
            )}
           <button
           onClick={()=>{
            handleLogout();
            handleCloseMenu();
           }}
           className="pt-5 font-bold block py-2 pl-4 transition-all hover:text-yellow-400"
           >
             Cerrar Sesión
           </button>
          </>
        ):(
           <>
              <Link 
              to={'/login'}
              className='pt-5 font-bold block py-2 pl-4 transition-all hover:text-yellow-400'
              onClick={handleCloseMenu}
              >
                 Ingresar
              </Link>
              {/* <Link
               to={'/home'}
               className="pt-5 font-bold block py-2 pl-4 transition-all hover:text-yellow-400"
               onClick={handleCloseMenu}
              >
              Servicios
              </Link> */}
              </>
            )}        
       </div>
       </>
     )}
    </div>
   </nav>
  );
 }
