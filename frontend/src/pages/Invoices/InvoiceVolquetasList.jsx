// InvoiceListPage.js (componente para mostrar todos los tanqueos)
import React, { useEffect, useState } from 'react';
import { Loading } from '../../components/Common/Loading';
import { Label } from '../../components/UI';
import { getAllVolquetas } from '../../../api/volquetas';

export function InvoiceVolquetasList() {
    const [volquetas, setVolquetas] = useState([]); // Estado para almacenar los tanqueos
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filterPlaca, setFilterPlaca] = useState('');
    const [filterCedula, setFilterCedula] = useState('');
    const [filterFechaInicio, setFilterFechaInicio] = useState('');
    const [filterFechaFin, setFilterFechaFin] = useState('');
 
    useEffect(() => {
        const fetchVolquetas = async () => {
            try {
                const data = await getAllVolquetas(); // Obtiene todos las volquetas
               setVolquetas(data);
                console.log('aqui mi console:', data)
              //  setVolquetas(Array.isArray(response.data) ? response.data : []); // Guarda la lista de volquetas en el estado
              //const data = Array.isArray(response.data) ? response.data.flat() : [];        // Guarda la lista de volquetas en el estado
              //setVolquetas(response.data);           //aqui guardamos la lista de volquetas'aplanada' en el estado
            } catch (error) {
                setError('No se pudo obtener la lista de tanqueos.');
            } finally {
                setLoading(false);
            }
        };

        fetchVolquetas(); // Llama a la función para obtener los datos
    }, []);
 console.log('aqui volquetas',volquetas)

    //Filtra las facturas segun placa, cédula y fecha
    const filteredVolquetas = volquetas.filter((volqueta)=>{
        const matchesPlaca = volqueta.placa_vehiculo?.toLowerCase().includes(filterPlaca.toLowerCase());
        const matchesCedula = volqueta.conductor_cedula?.toString().includes(filterCedula);

        const volquetaDate = new Date(volqueta.fecha);
        const matchesFecha =
        (!filterFechaInicio || volquetaDate >= new Date(filterFechaInicio)) &&
        (!filterFechaFin || volquetaDate <= new Date(filterFechaFin));

        return matchesPlaca && matchesFecha && matchesCedula;
    })

  //recalcula los totales con base en las facturas filtradas

  const totalViajes = filteredVolquetas.reduce((total, volqueta) => total + volqueta.n_viajes, 0);
  const totalKMDia = filteredVolquetas.reduce((total, volqueta) => total + parseFloat(volqueta.total_km_dia) || 0, 0);


    //Funcionpara ver todos los recibos (sin filtros)
    const handleShowAllFilters= () =>{
        setFilterCedula('');
        setFilterPlaca('');
        setFilterFechaInicio('');
        setFilterFechaFin('');
    }

    return (
        <div className="bg-otherpages min-h-screen p-4">
            {loading && <Loading />}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && (
                <div className="overflow-x-auto">
                    <h2 className="text-2xl font-bold mb-4">Lista de Recibos de Volquetas</h2>

                    {/* Filtros de búsqueda */}
                    <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex flex-col">
                            <Label>Por Placa</Label>
                            <input
                                type="text"
                                placeholder="Buscar por Placa"
                                value={filterPlaca}
                                onChange={(e) => setFilterPlaca(e.target.value)}
                                className="border px-4 py-2 mr-2 rounded"
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label>Desde Fecha</Label>
                            <input
                                type="date"
                                value={filterFechaInicio}
                                onChange={(e) => setFilterFechaInicio(e.target.value)}
                                className="border px-4 py-2 rounded"
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label>Hasta Fecha</Label>
                            <input
                                type="date"
                                value={filterFechaFin}
                                onChange={(e) => setFilterFechaFin(e.target.value)}
                                className="border px-4 py-2 rounded"
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label>Por Cédula</Label>
                            <input
                                type="text"
                                placeholder="Buscar por Cédula"
                                value={filterCedula}
                                onChange={(e) => setFilterCedula(e.target.value)}
                                className="border px-4 py-2 rounded"
                            />
                        </div>

                        <button
                            onClick={handleShowAllFilters}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mt-6"
                        >
                            Ver Todos
                        </button>
                    </div>

                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Nº Planilla</th>
                                <th className="border px-4 py-2">Fecha</th>
                                <th className="border px-4 py-2">Cédula del Conductor</th>
                                <th className="border px-4 py-2">Placa del Vehículo</th>
                                <th className="border px-4 py-2">Vol (mts³)</th>
                                <th className="border px-4 py-2">Número de Viajes</th>
                                <th className="border px-4 py-2">Material</th>
                                <th className="border px-4 py-2">Total KM del Día</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            {/* {volquetas.flat().map((volqueta) => (                             */}
                            {filteredVolquetas.map((volqueta) => (
                                <tr key={volqueta._id}>
                                    <td className="border px-4 py-2">{volqueta.n_planilla}</td>
                                    <td className="border px-4 py-2">{new Date(volqueta.fecha).toLocaleDateString()}</td>
                                    <td className="border px-4 py-2">{volqueta.conductor_cedula}</td>
                                    <td className="border px-4 py-2">{volqueta.placa_vehiculo}</td>
                                    <td className="border px-4 py-2">{volqueta.volmts3}</td>
                                    <td className="border px-4 py-2">{volqueta.n_viajes}</td>
                                    <td className="border px-4 py-2">{volqueta.material}</td>
                                    <td className="border px-4 py-2">{volqueta.total_km_dia}</td> 
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="font-bold">
                                <td colSpan={5} className="border px-4 py-2 text-right">Total:</td>
                                <td className="border px-4 py-2">{totalViajes}</td>
                                <td colSpan={2} className="border px-4 py-2">{totalKMDia}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )}
        </div>
    );
}
