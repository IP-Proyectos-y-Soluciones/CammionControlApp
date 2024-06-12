import app from './app.js';
// import { startConnection } from './config/db.js';

// startConnection();

async function main() {
  try {
    // await startConnection();
    // console.log('Database connected...');

    const appListener = app.listen(app.get('port'), () => {
      console.log(
        `Server is running on port: ${app.get('port')}`,
      );
    });

    // Apagado satisfactorio con SIGINT o SIGTERM...
    process.on('SIGINT', () => {
      console.log(
        'Received SIGINT signal, shutting down...',
      );
      appListener.close();
    });
  } catch (error) {
    console.error(error);
  }
}

main();
