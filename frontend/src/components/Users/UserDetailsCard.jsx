/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getEmployeeByDniRequest } from '../../../api/employees';

export function UsersDetailsCard({ employeeUser }) {
    const [employee, setEmployee] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (employeeUser) {
            const searchEmployeeUser = async () => {
                const responseDataEmployee = await getEmployeeByDniRequest(
                    employeeUser.usuario_cedula,
                );

                setEmployee([
                    responseDataEmployee.data.nombres,
                    ' ',
                    responseDataEmployee.data.apellidos,
                ]);
            };

            searchEmployeeUser();
        }
    }, [employeeUser]);

    const handleCardClick = () => {
        if (location.pathname.includes('/users/user/byuser')) {
            navigate('/users/user/byuser');
        } else {
            navigate('/users');
        }
    };

    if (!employeeUser) {
        return <p>No se encontraron detalles del usuario.</p>;
    }

    return (
        <div
            className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            onClick={handleCardClick}
        >
            <div className="p-4">
                {/* <div className="text-2xl text-slate-700">Usuario: </div> */}
                <h2 className="text-2xl text-gray-800 mb-3">
                    Usuario:{' '}
                    <b className="text-blue-700">{employeeUser.usuario}</b>
                </h2>

                <hr className="h-0.5 border-0 bg-gray-400 mb-3" />

                <p className="text-gray-700 text-base mb-2">
                    Cédula: <b>{employeeUser.usuario_cedula}</b>
                </p>

                <p className="text-gray-700 text-base mb-2">
                    Rol: <b>{employeeUser.roles}</b>
                </p>

                <p className="text-gray-700 text-base mb-2">
                    Status: <b>{employeeUser.estado}</b>
                </p>

                <p className="text-gray-700 text-base mb-2">
                    Sesión:{' '}
                    {employeeUser.logged === true ? (
                        <b className="text-green-500 font-semibold">Abierta</b>
                    ) : (
                        <b>Cerrada</b>
                    )}
                </p>

                <p className="text-gray-700 text-base mb-2">
                    Nombres y Apellidos: <b>{employee}</b>
                </p>
            </div>
        </div>
    );
}
