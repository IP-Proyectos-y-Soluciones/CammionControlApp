import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormularioRegistroTanqueo = () => {
  const [formData, setFormData] = useState({
    placa: '',
    conductor: '',
    fecha: '',
    noRecibo: '',
    nombreEstacion: '',
    kilometraje: '',
    valor: '',
    recibo: null // para manejar la subida de archivos
  });

  const [fileName, setFileName] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, recibo: file });
    setFileName(file ? file.name : ''); // aquí se guarda el nombre del archivo
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('tanqueoCombustibleData', JSON.stringify(formData));
    navigate('/tanqueospdf'); // Redirige al componente Tanqueo
  };

  const handleBackClick = ()=>{
    navigate(-1);
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl text-gray-600 font-bold text-center mb-6">Control Tanqueo de Combustible</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="placa" className="block text-gray-700">Placa de Vehículo:</label>
          <input
            type="text"
            id="placa"
            name="placa"
            value={formData.placa}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="conductor" className="block text-gray-700">Nombre del Conductor:</label>
          <input
            type="text"
            id="conductor"
            name="conductor"
            value={formData.conductor}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fecha" className="block text-gray-700">Fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="noRecibo" className="block text-gray-700">Número de Recibo:</label>
          <input
            type="text"
            id="noRecibo"
            name="noRecibo"
            value={formData.noRecibo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nombreEstacion" className="block text-gray-700">Nombre de Estación:</label>
          <input
            type="text"
            id="nombreEstacion"
            name="nombreEstacion"
            value={formData.nombreEstacion}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="kilometraje" className="block text-gray-700">Kilometraje al Momento de Tanquear:</label>
          <input
            type="number"
            id="kilometraje"
            name="kilometraje"
            value={formData.kilometraje}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="valor" className="block text-gray-700">Valor:</label>
          <input
            type="number"
            id="valor"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="recibo" className="block text-gray-700">Subir Recibo:</label>
          <div className="flex items-center">
            <input
              type="file"
              id="recibo"
              name="recibo"
              accept="image/*"
              onChange={handleFileChange}
              className="w-96 px-4 py-3 border border-gray-300 rounded-md text-black"
              required
            />
            <span className="ml-4 text-gray-700">{fileName || 'No hay archivo seleccionado'}</span>
          </div>
        </div>

        <div className="flex mt-8 space-x-8 justify-center">
          <button
          className="flex items-center justify-between bg-gray-600 text-white px-8 py-3 rounded-full shadow-lg mt-8 hover:bg-red-600 transition-colors"
          style={{ width: 'auto', minWidth: '150px' }}
          onClick={handleBackClick}
          >            
            <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-2xl mr-2"
            />
            <span className="flex-grow text-left">Regresar</span>
          </button>

          <button
          type="submit"
          className="flex items-center justify-between bg-gray-600 text-white px-10 py-3 rounded-full shadow-lg mt-8 hover:bg-red-600 transition-colors"
          style={{ width: 'auto', minWidth: '120px' }}
        >
          <span className="flex-grow text-left">Vista Previa</span>
          <FontAwesomeIcon icon={faAngleRight} className="text-2xl ml-3" />
        </button>
        </div>

      </form>
    </div>
  );
};

export default FormularioRegistroTanqueo;
