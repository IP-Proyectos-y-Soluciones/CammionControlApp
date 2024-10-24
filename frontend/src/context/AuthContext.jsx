/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import { loginCheck } from '../../api/auth';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userRole, setUserRole] = useState(null);
    const [userName, setUserName] = useState(null);

    const [dni, setDNI] = useState(null);
    const [vehicleRegistrationPlate, setVehicleRegistrationPlate] = useState(null);
  
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await loginCheck();

                setIsAuthenticated(response.data.isAuthenticated);
                setUserRole(response.data.user?.roles); // Se guardar el rol...

        //  console.log('Rol del usuario:', response.data.user?.roles);
        } catch (error) {
          setIsAuthenticated(false);
          setUserRole(null);
          setUserName(null);
          setDNI(null);
          setVehicleRegistrationPlate(null);
        } finally {
          setLoading(false);
        }
      };
  
      // checkAuth();
      if (isAuthenticated === null) {
        checkAuth();
      } else {
        setLoading(false);
      }
    }, [isAuthenticated]);

    const logout = () => {
        setIsAuthenticated(false);
        setUserRole(null);
        setUserName(null);
    };

    return (
      <AuthContext.Provider
        value={{
          isAuthenticated,
          loading,
          userRole, // Exponemos el rol
          setUserRole,
          logout,
          setIsAuthenticated,
          userName,
          setUserName,
          dni,
          setDNI,
          vehicleRegistrationPlate,
          setVehicleRegistrationPlate,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
};
