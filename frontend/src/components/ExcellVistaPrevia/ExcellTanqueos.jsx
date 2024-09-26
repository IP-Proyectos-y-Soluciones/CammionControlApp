import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ExcellTanqueos = () => {
  const data = {
    'Información del Tanqueo': [
      { 'Placa de Vehículo': 'ABC1234' },
      { 'Nombre Conductor': 'Juan Pérez' },
      { 'Fecha': '2024-08-11' },
      { 'No Recibo': '123456' },
      { 'Nombre Estación': 'Estación de Servicio XYZ' },
      { 'Kilometraje al Tanquear': '120,000 km' },
      { 'Valor': '$250,000.00' },
    ],
  };

  const handleDownload = () => {
    const wb = XLSX.utils.book_new();

    // Add Información del Tanqueo
    const ws = XLSX.utils.json_to_sheet(data['Información del Tanqueo']);
    XLSX.utils.book_append_sheet(wb, ws, 'Información del Tanqueo');

    // Generate Excel file
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'ControlTanqueo.xlsx');
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Control de Tanqueo de Combustible
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Información del Tanqueo</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <span className="font-semibold w-48 text-gray-800">Placa de Vehículo:</span>
            <span className="text-gray-800">ABC1234</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-48 text-gray-800">Nombre Conductor:</span>
            <span className="text-gray-800">Juan Pérez</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-48 text-gray-800">Fecha:</span>
            <span className="text-gray-800">2024-08-11</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-48 text-gray-800">No Recibo:</span>
            <span className="text-gray-800">123456</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-48 text-gray-800">Nombre Estación:</span>
            <span className="text-gray-800">Estación de Servicio XYZ</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-48 text-gray-800">Kilometraje al Tanquear:</span>
            <span className="text-gray-800">120,000 km</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-48 text-gray-800">Valor:</span>
            <span className="text-gray-800">$250,000.00</span>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-8'>
      <button
        onClick={handleDownload}
        className='flex items-center justify-between bg-gray-600 text-white px-10 py-3 rounded-full shadow-lg mt-8 hover:bg-red-600 transition-colors'
      >
        Descargar como Excel
      </button>
      </div>
    </div>
  );
};

export default ExcellTanqueos;
