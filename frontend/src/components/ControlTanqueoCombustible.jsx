import React, { useState } from 'react';

const FormularioRegistroTanqueo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    fecha_tanqueo: '',
    n_recibo: '',
    estacion: '',
    cantidad_galones: '',
    valor_tanqueo: '',
    vehiculo: '',
    conductor: ''
  });
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setMessage('Please select a file first.');
      return;
    }

    const data = new FormData();
    data.append("file", selectedFile);
    for (const key in formData) {
      data.append(key, formData[key]);
    }
console.log(data);
    try {
      const response = await fetch('http://localhost:7000/api/tanqueos/update/669a7dc4f6f145c64e7c07ef', {
        method: 'PATCH',
        body: data,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      

      const result = await response.json();
      setMessage('File uploaded successfully: ' );
    } catch (error) {
      console.error('Error:', error);
      setMessage('File upload failed.');
    }
  };

  return (
    <>
      <div>
        <h2>Upload Image</h2>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <input type="text" name="fecha_tanqueo" value={formData.fecha_tanqueo} onChange={handleInputChange} placeholder="Fecha Tanqueo" />
          <input type="text" name="n_recibo" value={formData.n_recibo} onChange={handleInputChange} placeholder="Número de Recibo" />
          <input type="text" name="estacion" value={formData.estacion} onChange={handleInputChange} placeholder="Estación" />
          <input type="text" name="cantidad_galones" value={formData.cantidad_galones} onChange={handleInputChange} placeholder="Cantidad de Galones" />
          <input type="text" name="valor_tanqueo" value={formData.valor_tanqueo} onChange={handleInputChange} placeholder="Valor Tanqueo" />
          <input type="text" name="vehiculo" value={formData.vehiculo} onChange={handleInputChange} placeholder="Vehículo" />
          <input type="text" name="conductor" value={formData.conductor} onChange={handleInputChange} placeholder="Conductor" />
          <button type="submit">Upload</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export default FormularioRegistroTanqueo;
