import { Link, useNavigate } from 'react-router-dom';
import { logoutRequest } from '../../../api/auth';
import { useAuth } from '../../context/AuthContext';
import { EmployeeDropdown } from '../Menu/EmployeeDropdown';
import { UserDropdown } from '../Menu/UserDropdown';
import { EmployeeFormDropdown } from '../Menu/EmployeesFormDropdown';


export function NavBarMain() {
  const { logout, setIsAuthenticated, userRole, userName } = useAuth();
  const navigate = useNavigate();

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

  const isAuthorized =
  userRole === import.meta.env.VITE_RAD ||
  userRole === import.meta.env.VITE_ROW;

  return (
    <nav className="bg-gray-800 py-3 px-8 rounded-lg flex justify-between items-center">
      <div>
      <Link to={'/dashboard/admin'} className="text-2xl font-bold text-white">       
          Dashboard Admin        
      </Link>
      </div>

      <div className="flex items-center space-x-4">
      <Link
        to={'/login'}
        className=" text-white px-4 py-2 hover:text-red-600 transition-colors"
      >
        Login
      </Link>
      {isAuthorized ?(
        <>
      <EmployeeDropdown />
      <UserDropdown />
       </>
       ):(
        <>
            <Link
                to="/unauthorized"
                 className="text-white px-4 py-2 hover:text-red-600 transition-colors"
            >
                No Permitido...
            </Link>
            <Link  className="text-white px-4 py-2 hover:text-red-600 transition-colors">
               <EmployeeFormDropdown />
            </Link>
        </>
        )}
      <Link
        to={'/'}
        className="text-white px-4 py-2  hover:text-red-600 transition-colors"
      >
        Inicio
      </Link>


      <Link
        to={'/home'}
        className="text-white px-4 py-2 hover:text-red-600 transition-colors"
      >
        Servicios
      </Link>

      <button
        onClick={handleLogout}
        className="text-white px-4 py-2 hover:text-red-600 transition-colors"
      >
        Logout
      </button>
      </div>
    </nav>
  );
}
