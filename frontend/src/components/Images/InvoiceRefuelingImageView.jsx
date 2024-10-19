/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function InvoiceRefuelingImageView() {
    const location = useLocation(); // Se obtiene el estado pasado desde la navegación...
    const navigate = useNavigate();
    const { imageUrl } = location.state || {};

    const handleBackClick = () => {
        navigate('/search/refueling'); // Navega de vuelta al formulario...
    };

    if (!imageUrl) {
        return (
            <p className="text-center text-red-500">
                No se pudo cargar la imagen...
            </p>
        );
    }

    return (
        <div className="max-w-2xl mx-auto mt-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Imagen del Tanqueo</h1>
            <img
                src={imageUrl}
                alt="Imagen de Tanqueo"
                className="w-full h-auto mb-6"
            />

            <button
                className="absolute bottom-20 -ml-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleBackClick}
            >
                Regresar al formulario...
            </button>
        </div>
    );
}
