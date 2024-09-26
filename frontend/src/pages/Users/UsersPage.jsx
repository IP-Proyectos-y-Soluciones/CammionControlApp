import React from 'react';
import { UsersList } from '../../components/Users/UsersList';

export function UsersPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-gray-800 font-bold italic mb-4">
        Listado de Usuarios
      </h1>
      <UsersList />
    </div>
  );
}
