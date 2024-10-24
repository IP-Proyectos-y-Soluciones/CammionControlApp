// InvoiceListPage.js (componente para mostrar todos los tanqueos)
import React, { useEffect, useState } from 'react';
import { Loading } from '../../components/Common/Loading';
import { getAllRefuelingRequest } from '../../../api/refueling'; // Importa la función de tu API
import { Label } from '../../components/UI';

export function InvoiceRefuelingList() {
    const [invoices, setInvoices] = useState([]); // Estado para almacenar los tanqueos
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filterPlaca, setFilterPlaca] = useState('');
   // const [filterFecha, setFilterFecha] = useState('');
    const [filterCedula, setFilterCedula] = useState('');
    const [filterFechaInicio, setFilterFechaInicio] = useState('');
    const [filterFechaFin, setFilterFechaFin] = useState('');

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const data = await getAllRefuelingRequest(); // Obtiene todos los tanqueos
                setInvoices(data); // Guarda la lista de tanqueos en el estado
                console.log('aquioo:', data)
            } catch (error) {
                setError('No se pudo obtener la lista de tanqueos.');
            } finally {
                setLoading(false);
            }
        };

        fetchInvoices(); // Llama a la función para obtener los datos
    }, []);


    //Filtra las facturas segun placa, cédula y fecha
    const filteredInvoices = invoices.filter((invoice)=>{
        const matchesPlaca = invoice.vehiculo_placa?.toLowerCase().includes(filterPlaca.toLowerCase());
       // const matchesFecha = filterFecha ? new Date(invoice.fecha_tanqueo).toLocaleDateString()  === new Date(filterFecha).toLocaleDateString() : true;
        const matchesCedula = invoice.conductor_cedula?.toString().includes(filterCedula);

        const invoiceDate = new Date(invoice.fecha_tanqueo);
        const matchesFecha =
        (!filterFechaInicio || invoiceDate >= new Date(filterFechaInicio)) &&
        (!filterFechaFin || invoiceDate >= new Date(filterFechaFin));

        return matchesPlaca && matchesFecha && matchesCedula;
    })

  //recalcula los totales con base en las facturas filtradas

  const totalGallons = filteredInvoices.reduce((total, invoice) => total + parseFloat(invoice.cantidad_galones) || 0, 0);
  const totalCost = filteredInvoices.reduce((total, invoice) => total + invoice.valor_tanqueo, 0);


    //Funcionpara ver todos los recibos (sin filtros)
    const handleShowAllFilters= () =>{
        setFilterCedula('');
       // setFilterFecha('');
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
                    <h2 className='text-2xl font-bold mb-4'>Lista de Tanqueos Realizados</h2>

                    {/*Filtros de búsqueda */}
                    <div className='flex flex-wrap gap-4 mb-4'>
                        <div className='flex flex-col'>
                        <Label>Por Placa</Label>
                        <input 
                        type='text'
                        placeholder='Buscar por Placa'
                        value={filterPlaca}
                        onChange={(e)=> setFilterPlaca(e.target.value)}
                        className='border px-4 py-2 mr-2 rounded'
                        />
                        </div>
                        <div className='flex flex-col'>
                        <Label>Desde Fecha</Label> 
                        <input 
                        type='date'
                        value={filterFechaInicio}
                        onChange={(e)=> setFilterFechaInicio(e.target.value)}
                        className='border px-4 py-2 rounded'
                        />
                        </div>
                        <div className='flex flex-col'>
                        <Label>Hasta Fecha</Label>
                        <input
                        type='date'
                        value={filterFechaFin}
                        onChange={(e)=> setFilterFechaFin(e.target.value)}
                        className='border px-4 py-2 rounded'
                        />
                        </div>
                        <div className='flex flex-col'>
                        <Label>Por Cédula</Label>
                        <input 
                        type='text'
                        placeholder='Buscar por Cédula'
                        value={filterCedula}
                        onChange={(e)=> setFilterCedula(e.target.value)}
                        className='border px-4 py-2 rounded'
                        />
                        </div>
                    
                    <button
                    onClick={handleShowAllFilters}
                    className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mt-6'
                    >
                        Ver Todos
                    </button>
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
