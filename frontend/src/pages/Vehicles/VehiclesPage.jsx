/* eslint-disable no-unused-vars */
import React from 'react';
import { VehiclesList } from '../../components/Vehicles/VehicleList';

export function VehiclesPage() {
    return (
        <div className="container mx-auto p-4 bg-otherpages min-h-screen">
            <h1 className="text-2xl text-gray-800 font-bold italic mb-4">
                Flota de Vehículos
            </h1>
            <VehiclesList />
        </div>
    );
}
