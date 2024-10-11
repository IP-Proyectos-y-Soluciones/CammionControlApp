/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { showAllVehiclesRequest } from '../../../api/vehicles';
import { useNavigate } from 'react-router-dom';

export function VehiclesList() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const searchVehicles = async () => {
            try {
                const response = await showAllVehiclesRequest();

                setVehicles(response.data);
            } catch (error) {
                if (error.response) {
                    const statusCode = error.response.status;

                    console.error('Código de error de status: ', statusCode);
                    //
                    switch (statusCode) {
                        case 401:
                            navigate('/unauthorized');
                            break;
                        case 404:
                            setError('No se encontraron empleados...!');
                            break;
                        case 500:
                            setError(
                                'Error en el servidor. Por favor, inténtalo más tarde...!',
                            );
                            break;
                        default:
                            setError(
                                'Error desconocido. Favor contactar con el desarrollador de la app...!',
                            );
                            break;
                    }
                }
            } finally {
                setLoading(false);
            }
        };

        searchVehicles();
    }, [navigate]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 text-gray-600">
                <thead className="text-gray-600 border-b-4">
                    <tr>
                        <th className="px-4 py-2 border-b">Placas</th>
                        <th className="px-4 py-2 border-b">Clase</th>
                        <th className="px-4 py-2 border-b">Marca</th>
                        <th className="px-4 py-2 border-b">Color</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle) => (
                        <tr
                            key={vehicle._id}
                            className="border-b-4 cursor-pointer"
                            onClick={() => navigate(`vehicle/${vehicle._id}`)}
                        >
                            <td className="px-4 py-2 border-b pl-24">
                                {vehicle.placa}
                            </td>
                            <td className="px-4 py-2 border-b pl-40">
                                {vehicle.clase_de_vehiculo}
                            </td>
                            <td className="-px-1 py-2 border-b pl-40">
                                {vehicle.marca}
                            </td>
                            <td className="-px-1 py-2 border-b pl-40">
                                {vehicle.color}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
