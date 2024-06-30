import mongoose from 'mongoose';
import app from './app.js';
import { startConnection } from './config/db.js';
import CargaPesada from './models/CargaPesada.js';
import Documento from './models/Documento.js';
import Licencia from './models/Licencia.js';
import Mecanico from './models/Mecanico.js';
import Persona from './models/Persona.js';
import Tanqueo from './models/Tanqueo.js';
import Usuario from './models/Usuario.js';
import Vehiculo from './models/Vehiculo.js';
import Volqueta from './models/Volqueta.js';

async function main() {
  try {
    await startConnection();
    console.log('Database connected...');

    // ======= Test de creación de documentos ======== //
    // =========================================== //

    // const persona = await Persona.create({
    //   cedula: 123456789,
    //   nombres: 'John',
    //   apellidos: 'Doe',
    //   fecha_nacimiento: new Date('1980-01-01'),
    //   correo: 'john.doe@example.com',
    //   telefono: '1234567890',
    //   tipo_de_contrato: 'Fijo',
    //   fecha_inicio_contrato: new Date(),
    //   usuario: new mongoose.Types.ObjectId(), // Puedes ajustar esto según sea necesario
    // });

    // const vehiculo = await Vehiculo.create({
    //   placa: 'ABC123',
    //   tipo_de_combustible: 'Gasolina',
    //   clase_de_vehiculo: 'CAMION SENCILLO',
    //   marca: 'Toyota',
    //   color: 'Rojo',
    //   propietario: persona._id,
    // });

    // await Documento.create({
    //   cerificado_N: '12345',
    //   tipo: 'Poliza de seguro',
    //   fecha_expedicion: new Date(),
    //   fecha_vencemiento: new Date('2025-01-01'),
    //   vehiculo: vehiculo._id,
    // });

    // await Licencia.create({
    //   conductor: persona._id,
    //   licencia_N: 54321,
    //   categoria: 'B',
    //   clase_de_vehiculo: 'Automóvil',
    //   servicio: 'Particular',
    //   fecha_expedicion: new Date(),
    //   fecha_vencemiento: new Date('2025-01-01'),
    // });

    // await Mecanico.create({
    //   placas: vehiculo._id,
    //   fecha_de_revision: new Date(),
    //   kilometraje: '15000',
    //   descripcion_revicion: 'Revisión general',
    // });

    // await Tanqueo.create({
    //   fecha_tanqueo: new Date(),
    //   estacion: 'Estación 1',
    //   cantidad_galones: '50',
    //   valor_tanqueo: 100,
    //   vehiculo: vehiculo._id,
    //   conductor: persona._id,
    // });

    // await Tractomula.create({
    //   fecha_inicio: new Date(),
    //   fecha_final: new Date('2025-01-01'),
    //   placas: vehiculo._id,
    //   conductor: persona._id,
    //   ciudad_inicio: 'Ciudad A',
    //   ciudad_destino: 'Ciudad B',
    //   empresa: 'Empresa X',
    //   valor_flete: 5000,
    //   anticipo: 1000,
    //   descripcion_de_gastos: 'Gastos varios',
    //   gastos: 500,
    //   total_anticipos_fletesPagados: 1500,
    //   total_gastos: 500,
    //   saldo: 3000,
    // });

    // await Volqueta.create({
    //   fecha: new Date(),
    //   placas: vehiculo._id,
    //   conductor: persona._id,
    //   volmts3: '10',
    //   n_viajes: 5,
    //   hora_inicio: new Date(),
    //   hora_final: new Date(),
    //   honorario_inicial: 100,
    //   honorario_final: 500,
    //   total_horas: 5,
    //   km_inicial: '100',
    //   km_final: '200',
    //   total_km_dia: '100',
    //   corte_de_cargue: '08:00',
    //   corte_de_descargue: '12:00',
    //   duracion: '4 horas',
    // });

    // await Usuario.create({
    //   usuario: 'admin',
    //   password: 'admin123',
    //   roles: 'Admin',
    //   estado: true,
    //   infoPersonal: persona._id,
    // });

    // console.log('Test documents created...');

    // =========================================== //
    // =========================================== //

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
      mongoose.connection.close(() => {
        console.log('MongoDB connection closed...');
        process.exit(0);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

main();
