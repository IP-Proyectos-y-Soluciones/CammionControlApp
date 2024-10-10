/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { HomePageAdmin } from '../Home/HomePageAdmin';

export function GeneralAccessPageAdmin() {
    const { userName } = useAuth();
    const fullName = userName;

    return (
        <div className="bg-homepage min-h-screen">
            <div className="container mx-auto p4">
                <h1 className="text-4xl text-center text-slate-500 font-bold italic pt-6">
                    Bienvenido {fullName}
                </h1>
                <HomePageAdmin />
            </div>
        </div>
    );
}
