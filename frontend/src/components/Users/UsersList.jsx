import { useEffect, useState } from 'react';
import { showAllUsersRequest } from '../../../api/users';
import { useNavigate } from 'react-router-dom';

export function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const searchUsers = async () => {
            try {
                const response = await showAllUsersRequest();

                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            } finally {
                setLoading(false);
            }
        };

        searchUsers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 text-gray-600">
                <thead className="text-gray-600 border-b-4">
                    <tr>
                        <th className="px-4 py-2 border-b">Cedula</th>
                        <th className="px-4 py-2 border-b">Usuario</th>
                        <th className="px-4 py-2 border-b">Rol</th>
                        <th className="px-4 py-2 border-b">Estado Actual</th>
                        <th className="px-4 py-2 border-b">Estado de Sesión</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user._id}
                            className="border-b-4 cursor-pointer"
                            //       onClick={() => navigate(`user/${user._id}`)}
                        >
                            <td className="px-4 py-2 border-b pl-24">
                                {user.usuario_cedula}
                            </td>
                            <td className="px-4 py-2 border-b pl-32">
                                {user.usuario}
                            </td>
                            <td className="px-4 py-2 border-b pl-24">
                                {user.roles === 'Admin'
                                    ? 'Administrador'
                                    : user.roles}
                            </td>
                            <td className="px-4 py-2 border-b pl-16">
                                {user.estado === 'Bloqueado' ? (
                                    <a className="text-red-600">
                                        {user.estado}
                                    </a>
                                ) : (
                                    <a className="text-gray-600">
                                        {user.estado}
                                    </a>
                                )}
                            </td>
                            <td className="px-4 py-2 border-b pl-32">
                                {user.logged ? (
                                    <b className="text-blue-700">
                                        Sesión abierta
                                    </b>
                                ) : (
                                    'Sesión cerrada'
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
