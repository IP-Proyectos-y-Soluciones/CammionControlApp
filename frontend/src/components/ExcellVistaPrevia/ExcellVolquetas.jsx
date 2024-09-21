import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ExcellVolquetas = () => {
    const data = {
        'Información del Transporte': [
            { 'Placa de Vehículo': 'ABC1234' },
            { 'Nombre Conductor': 'Juan Pérez' },
            { 'Recibo de Obra No': '456789' },
            { Fecha: '2024-08-11' },
            { 'Hora de Ingreso': '08:00 AM' },
            { 'Hora de Salida': '05:00 PM' },
            { 'Número de Viajes por Día': '3' },
            { 'Kilometraje Inicial': '100,000 km' },
            { 'Kilometraje Final': '101,500 km' },
            { 'Total Kilómetros Recorridos Diario': '1,500 km' },
        ],
        'Detalles de Viajes': [
            {
                '# Viajes': 1,
                Cliente: '',
                LugarCargue: '',
                LugarDescargue: '',
                Material: 'RECEBO',
                CantidadMC: '',
                Observaciones: '',
            },
            {
                '# Viajes': 2,
                Cliente: '',
                LugarCargue: '',
                LugarDescargue: '',
                Material: 'ARENA',
                CantidadMC: '',
                Observaciones: '',
            },
            {
                '# Viajes': 3,
                Cliente: '',
                LugarCargue: '',
                LugarDescargue: '',
                Material: 'DESALOJO',
                CantidadMC: '',
                Observaciones: '',
            },
        ],
    };

    const handleDownload = () => {
        const wb = XLSX.utils.book_new();

        // Add Información del Transporte
        let ws = XLSX.utils.json_to_sheet(data['Información del Transporte']);
        XLSX.utils.book_append_sheet(wb, ws, 'Información del Transporte');

        // Add Detalles de Viajes
        ws = XLSX.utils.json_to_sheet(data['Detalles de Viajes']);
        XLSX.utils.book_append_sheet(wb, ws, 'Detalles de Viajes');

        // Generate Excel file
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        saveAs(
            new Blob([wbout], { type: 'application/octet-stream' }),
            'ControlTransporteVolquetas.xlsx',
        );
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Control de Transporte de Materiales Volquetas Diario
            </h1>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Información del Transporte
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Placa de Vehículo:
                        </span>
                        <span className="text-gray-800">ABC1234</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Nombre Conductor:
                        </span>
                        <span className="text-gray-800">Juan Pérez</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Recibo de Obra No:
                        </span>
                        <span className="text-gray-800">456789</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Fecha:
                        </span>
                        <span className="text-gray-800">2024-08-11</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Hora de Ingreso:
                        </span>
                        <span className="text-gray-800">08:00 AM</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Hora de Salida:
                        </span>
                        <span className="text-gray-800">05:00 PM</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Número de Viajes por Día:
                        </span>
                        <span className="text-gray-800">3</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Kilometraje Inicial:
                        </span>
                        <span className="text-gray-800">100,000 km</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Kilometraje Final:
                        </span>
                        <span className="text-gray-800">101,500 km</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Total Kilómetros Recorridos Diario:
                        </span>
                        <span className="text-gray-800">1,500 km</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Detalles de Viajes
                </h2>
                <table className="w-full border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-gray-800">
                                # Viajes
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-800">
                                Cliente
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-800">
                                Lugar de Cargue
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-800">
                                Lugar de Descargue
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-800">
                                Material o Actividad
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-800">
                                Cantidad Metros Cúbicos
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-800">
                                Observaciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data['Detalles de Viajes'].map((viaje, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                                    {viaje['# Viajes']}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                                    {viaje.Cliente}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                                    {viaje.LugarCargue}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                                    {viaje.LugarDescargue}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                                    {viaje.Material}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                                    {viaje.CantidadMC}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                                    {viaje.Observaciones}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center mt-8">
                <button
                    onClick={handleDownload}
                    className="flex items-center justify-between bg-gray-600 text-white px-10 py-3 rounded-full shadow-lg mt-8 hover:bg-red-600 transition-colors"
                >
                    Descargar como Excel
                </button>
            </div>
        </div>
    );
};

export default ExcellVolquetas;
