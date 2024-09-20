import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const FormularioRegistroTractomulas = () => {
    const [formData, setFormData] = useState({
      placa: '',
      conductor: '',
      planilla: '',
      inicio: '',
      final: '',
      anticipo: '',
      empresa: '',
      manifiesto: '',
      origen: '',
      destino: '',
      valorFlete: '',
      anticipoFlete: '',
      gastos:{
        acpm: '',
        descargue: '',
        cargue: '',
        peajes: '',
        bascula: '',
        despinchada: '',
        mantenimiento: '',
        lavado: ''
      },
      recibo: null // es para manejar la subida de archivos
    });
  
    const [fileName, setFileName] = useState('');

    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;

      //para manejar los cambios en gastos
      if (name in formData.gastos) {
        setFormData((prev)=>({
          ...prev,
          gastos: {...prev.gastos, [name]: value}
        }))
      } else {
        setFormData({ ...formData, [name]: value });
      }
     
    };

    const handleFileChange = (e) =>{
      const file = e.target.files[0];
      setFormData({...formData, recibo: file });
      setFileName(file ? file.name :'');  //aqui se guarda el nombre del archivo
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem('tractomulasData', JSON.stringify(formData));
      navigate('/tractomulaspdf');        // Redirige al componente Tractomulas
    };

    const handleBackClick = ()=>{
      navigate(-1);
    }
  
    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl text-gray-600 font-bold text-center mb-6">Control de Carga Pesada por Flete</h1>
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
            <label htmlFor="planilla" className="block text-gray-700">Número de Planilla:</label>
            <input
              type="text"
              id="planilla"
              name="planilla"
              value={formData.planilla}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>
         
          <div className="mb-4">
            <label htmlFor="inicio" className="block text-gray-700">Fecha de Inicio:</label>
            <input
              type="date"
              id="inicio"
              name="inicio"
              value={formData.inicio}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="final" className="block text-gray-700">Fecha de Final:</label>
            <input
              type="date"
              id="final"
              name="final"
              value={formData.final}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="empresa" className="block text-gray-700">Empresa / Persona Contratante :</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="manifiesto" className="block text-gray-700">Número de Manifiesto:</label>
            <input
              type="text"
              id="manifiesto"
              name="manifiesto"
              value={formData.manifiesto}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>
         
          <div className="mb-4">
            <label htmlFor="origen" className="block text-gray-700">Origen:</label>
            <input
              type="text"
              id="origen"
              name="origen"
              value={formData.origen}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>
         

          <div className="mb-4">
            <label htmlFor="destino" className="block text-gray-700">Destino:</label>
            <input
              type="text"
              id="destino"
              name="destino"
              value={formData.destino}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>
         
          <div className="mb-4">
            <label htmlFor="valorFlete" className="block text-gray-700">Valor Flete:</label>
            <input
              type="text"
              id="valorFlete"
              name="valorFlete"
              value={formData.valorFlete}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>         

          <div className="mb-4">
            <label htmlFor="anticipoFlete" className="block text-gray-700">Anticipo:</label>
            <input
              type="number"
              id="anticipoFlete"
              name="anticipoFlete"
              value={formData.anticipoFlete}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <h2 className="text-xl font-bold mb-4">Gastos de Viaje</h2>
         {Object.keys(formData.gastos).map((gasto, index)=>(
          <div className="mb-4" key={index}>
            <label htmlFor={gasto} className="block text-gray-700">{gasto.charAt(0).toUpperCase() + gasto.slice(1)}:</label>
            <input 
            type="number"
            id={gasto}
            name={gasto}
            value={formData.gastos[gasto]}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
            required
            />
          </div>
         ))}

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
          {/* <span className="ml-4 text-gray-700">{fileName || 'No hay archivo seleccionado'}</span> */}
          </div>
         </div>

         <div className="flex mt-8 space-x-8 justify-center">
          <button
          className="flex items-center justify-between bg-white border-2 border-red-600 text-red-600 px-8 py-3 rounded-full shadow-lg mt-8 hover:bg-red-600 hover:text-white transition-colors"
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
          className="flex items-center justify-between bg-white border-2 border-red-600 text-red-600 px-10 py-3 rounded-full shadow-lg mt-8 hover:bg-red-600 hover:text-white transition-colors"
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

export default FormularioRegistroTractomulas