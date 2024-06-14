import mongoose from 'mongoose';
import app from './app.js';
import { startConnection } from './config/db.js';
// import Usuario from './models/Usuario.js';

// startConnection();

async function main() {
  try {
    await startConnection();
    console.log('Database connected...');

    // const usuario = new Usuario({
    //   cedula: 123456789,
    //   nombres: 'Test',
    //   apellidos: 'User',
    //   celular: '1234567890',
    //   password: 'password123',
    //   roles: 'Empleado',
    //   estado: true,
    // });

    // await usuario.save();
    // console.log('Usuario de prueba creado...');

    app.listen(app.get('port'), () => {
      console.log(
        `NODE Server is running on port: ${app.get(
          'port',
        )}`,
      );
    });

    // Apagado satisfactorio con SIGINT o SIGTERM...
    process.on('SIGINT', () => {
      console.log(
        'Received SIGINT signal, shutting down...',
      );
      app.close(() => {
        mongoose.connection.close(() => {
          console.log('MongoDB connection closed...');
          process.exit(0);
        });
      });
    });
  } catch (error) {
    console.error(error);
  }
}

main();
