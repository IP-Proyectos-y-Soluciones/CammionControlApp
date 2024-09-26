/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Loading } from '../../components/Common/Loading';

export const ProtectedRoute = ({ children, allowed }) => {
/*
    const isAuthenticated = document.cookie
      .split('; ')
      .find((row) => row.startsWith('auth-token='))
       ?.split('=')[1];

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
*/
    const { isAuthenticated, loading, userRole } = useAuth();

    console.log('Rol en ProtectedRoute:', userRole); //////////////////////

    if (loading) {
        return <Loading />; // Muestra indicador de carga mientras se verifica la autenticación...
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (allowed && Array.isArray(userRole)) {
        const hasAccess = userRole.some((role) => allowed.includes(role));

        if (!hasAccess) {
            return <Navigate to="/unauthorized" replace />;
        }
    }

    return children;
};
