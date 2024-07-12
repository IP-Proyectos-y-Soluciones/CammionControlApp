import React, { useState } from 'react';

const FormularioRegistroTanqueo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setMessage('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
            
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
              }
              
    try {
      const response = await fetch('http://localhost:7000/api/cloudinary/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setMessage('File uploaded successfully: ' + result.imageUrl);
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
            <button type="submit">Upload</button>
        </form>
        {message && <p>{message}</p>}
        </div>
    </>
  );
};

export default FormularioRegistroTanqueo;
