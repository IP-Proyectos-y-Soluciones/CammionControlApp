// InvoiceListPage.js (componente para mostrar todos los tanqueos)
import React, { useEffect, useState } from 'react';
import { Loading } from '../../components/Common/Loading';
import { getAllRefuelingRequest } from '../../../api/refueling'; // Importa la función de tu API

export function InvoiceRefuelingList() {
    const [invoices, setInvoices] = useState([]); // Estado para almacenar los tanqueos
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filterPlaca, setFilterPlaca] = useState('');
    const [filterFecha, setFilterFecha] = useState('');
    const [filterCedula, setFilterCedula] = useState('');

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const data = await getAllRefuelingRequest(); // Obtiene todos los tanqueos
                setInvoices(data); // Guarda la lista de tanqueos en el estado
            } catch (error) {
                setError('No se pudo obtener la lista de tanqueos.');
            } finally {
                setLoading(false);
            }
        };

        fetchInvoices(); // Llama a la función para obtener los datos
    }, []);

    //calculo de los totales

    const totalGallons = invoices.reduce((total, invoice) => total + parseFloat(invoice.cantidad_galones) || 0, 0);
    const totalCost = invoices.reduce((total, invoice) => total + invoice.valor_tanqueo, 0);

    //Filtra las facturas segun placa, cedula y fecha
    const filteredInvoices = invoices.filter((invoice)=>{
        const matchesPlaca = invoice.vehiculo_placa?.toLowerCase().includes(filterPlaca.toLowerCase());
        const matchesFecha = filterFecha ? new Date(invoice.fecha_tanqueo).toLocaleDateString()  === new Date(filterFecha).toLocaleDateString() : true;
        const matchesCedula = invoice.conductor_cedula?.toString().includes(filterCedula);

        return matchesPlaca && matchesFecha && matchesCedula;
    })


    return (
        <div className="bg-otherpages min-h-screen p-4">
            {loading && <Loading />}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && (
                <div className="overflow-x-auto">
                    <h2>Lista de Tanqueos Realizados</h2>

                    {/*Filtros de búsqueda */}
                    <div>
                        <input 
                        type='text'
                        placeholder='Buscar por Placa'
                        value={filterPlaca}
                        onChange={(e)=> setFilterPlaca(e.target.value)}
                        className='border px-4 py-2 mr-2'
                        />
                        <input 
                        type='date'
                        value={filterFecha}
                        onChange={(e)=> setFilterFecha(e.target.value)}
                        className='border px-4 py-2 mr-2'
                        />
                        <input 
                        type='text'
                        placeholder='Buscar por Cédula'
                        value={filterCedula}
                        onChange={(e)=> setFilterCedula(e.target.value)}
                        className='border px-4 py-2'
                        />
                    </div>

                    <table className="min-w-full bg-white border border-gray-300">                        
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Nº Recibo</th>
                                <th className="border px-4 py-2">Fecha</th>
                                <th className="border px-4 py-2">Cédula del Conductor</th>
                                <th className="border px-4 py-2">Placa del Vehiculo</th>
                                <th className="border px-4 py-2">Cantidad Galones</th>
                                <th className="border px-4 py-2">Gasto del Tanqueo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredInvoices.map((invoice) => (
                                <tr key={invoice._id}>
                                    <td className="border px-4 py-2">{invoice.n_recibo}</td>
                                    <td className="border px-4 py-2">{new Date(invoice.fecha_tanqueo).toLocaleDateString()}</td> 
                                    <td className="border px-4 py-2">{invoice.conductor_cedula}</td> 
                                    <td className='border px-4 py-2'>{invoice.vehiculo_placa}</td>
                                    <td className='border px-4 py-2'>{invoice.cantidad_galones}</td>
                                    <td className="border px-4 py-2">{invoice.valor_tanqueo}</td>  
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className='font-bold'>
                                <td colSpan={4} className='border px-4 py-2 text-right'>Total:</td>
                                <td className='border px-4 py-2'>{totalGallons}</td>
                                <td className='border px-4 py-2'>{totalCost}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )}
        </div>
    );
}
