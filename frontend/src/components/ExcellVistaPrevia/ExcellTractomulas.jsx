import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ExcellTractomulas = () => {
    const data = {
        'Información del Transporte': [
            { 'Placa de Vehículo': 'ABC1234' },
            { 'Nombre Conductor': 'Juan Pérez' },
            { 'Número de Planilla': '123456' },
            { 'Fecha de Inicio': '2024-08-01' },
            { 'Fecha Final': '2024-08-05' },
            { 'Valor Anticipo': '$2,000,000.00' },
        ],
        'Detalles del Flete': [
            {
                Empresa: 'INVERTRANS',
                Manifiesto: '5465465',
                Origen: 'PASTO',
                Destino: 'CALI',
                ValorFlete: '$5,000,000',
                Anticipo: '$1,500,000',
            },
        ],
        'Gastos de Viaje': [
            { Descripción: 'ACPM', Monto: '$1,200,000.00' },
            { Descripción: 'Descargue', Monto: '$200,000.00' },
            { Descripción: 'Cargue', Monto: '$100,000.00' },
            { Descripción: 'Peajes', Monto: '$800,000.00' },
            { Descripción: 'Báscula', Monto: '$50,000.00' },
            { Descripción: 'Despinchada Llanta', Monto: '$150,000.00' },
            {
                Descripción: 'Pago Fras No 544 Mantenimiento',
                Monto: '$500,000.00',
            },
            { Descripción: 'Lavada General', Monto: '$120,000.00' },
        ],
        Resumen: [
            { 'Total Anticipos': '$3,500,000.00' },
            { 'Total Gastos': '$3,120,000.00' },
            { 'Saldo a Favor Empresa y/o Empleado': '$380,000.00' },
        ],
    };

    const handleDownload = () => {
        const wb = XLSX.utils.book_new();

        // Add Information del Transporte
        let ws = XLSX.utils.json_to_sheet(data['Información del Transporte']);
        XLSX.utils.book_append_sheet(wb, ws, 'Información del Transporte');

        // Add Detalles del Flete
        ws = XLSX.utils.json_to_sheet(data['Detalles del Flete']);
        XLSX.utils.book_append_sheet(wb, ws, 'Detalles del Flete');

        // Add Gastos de Viaje
        ws = XLSX.utils.json_to_sheet(data['Gastos de Viaje']);
        XLSX.utils.book_append_sheet(wb, ws, 'Gastos de Viaje');

        // Add Resumen
        ws = XLSX.utils.json_to_sheet(data['Resumen']);
        XLSX.utils.book_append_sheet(wb, ws, 'Resumen');

        // Generate Excel file
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        saveAs(
            new Blob([wbout], { type: 'application/octet-stream' }),
            'TransportControl.xlsx',
        );
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Control de Transporte de Carga Tractomulas por Flete
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
                            Número de Planilla:
                        </span>
                        <span className="text-gray-800">123456</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Valor Anticipo:
                        </span>
                        <span className="text-gray-800">$2,000,000.00</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Fecha de Inicio:
                        </span>
                        <span className="text-gray-800">2024-08-01</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Fecha Final:
                        </span>
                        <span className="text-gray-800">2024-08-05</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Detalles del Flete
                </h2>
                <table className="w-full border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-gray-800">
                                Empresa
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-800">
                                # Manifiesto
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-800">
                                Origen
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-800">
                                Destino
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-800">
                                Valor Flete
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-800">
                                Anticipo
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 text-gray-800 ">
                                INVERTRANS
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-gray-800">
                                5465465
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-gray-800">
                                PASTO
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-gray-800">
                                CALI
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-gray-800">
                                $5,000,000
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-gray-800">
                                $1,500,000
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Gastos de Viaje
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            ACPM:
                        </span>
                        <span className="text-gray-800">$1,200,000.00</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Descargue:
                        </span>
                        <span className="text-gray-800">$200,000.00</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Cargue:
                        </span>
                        <span className="text-gray-800">$100,000.00</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Peajes:
                        </span>
                        <span className="text-gray-800">$800,000.00</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Báscula:
                        </span>
                        <span className="text-gray-800">$50,000.00</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Despinchada Llanta:
                        </span>
                        <span className="text-gray-800">$150,000.00</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Pago Fras No 544 Mantenimiento:
                        </span>
                        <span className="text-gray-800">$500,000.00</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-48 text-gray-800">
                            Lavada General:
                        </span>
                        <span className="text-gray-800">$120,000.00</span>
                    </div>
                </div>
                <div className="mt-4 flex justify-between font-semibold">
                    <span className="text-gray-800">Subtotal Gastos:</span>
                    <span className="text-gray-800">$3,120,000.00</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Resumen
                </h2>
                <div className="flex justify-between font-semibold mb-2">
                    <span className="text-gray-800">Total Anticipos:</span>
                    <span className="text-gray-800">$3,500,000.00</span>
                </div>
                <div className="flex justify-between font-semibold mb-2">
                    <span className="text-gray-800">Total Gastos:</span>
                    <span className="text-gray-800">$3,120,000.00</span>
                </div>
                <div className="flex justify-between font-semibold">
                    <span className="text-gray-800">
                        Saldo a Favor Empresa y/o Empleado:
                    </span>
                    <span className="text-gray-800">$380,000.00</span>
                </div>
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

export default ExcellTractomulas;
