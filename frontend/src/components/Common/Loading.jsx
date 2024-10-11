/* eslint-disable no-unused-vars */
import React from 'react';

export const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <div
                    className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-4 border-red-600 border-solid rounded-full"
                    role="status"
                >
                    <span className="sr-only">Loading...</span>
                </div>
                <p className="mt-4 text-lg text-gray-700">Cargando...</p>
            </div>
        </div>
    );
};
