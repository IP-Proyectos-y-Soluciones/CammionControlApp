import mongoose from "mongoose";
import app from "./app.js";
import { startConnection } from "./config/db.js";
import cron from "node-cron";
import CargaPesada from "./models/CargaPesada.js";
import Cloudinary from "./models/Cloudinary.js";
import Documento from "./models/Documento.js";
import Licencia from "./models/Licencia.js";
import Mecanico from "./models/Mecanico.js";
import Persona from "./models/Persona.js";
import Tanqueo from "./models/Tanqueo.js";
import Usuario from "./models/Usuario.js";
import Vehiculo from "./models/Vehiculo.js";
import Volqueta from "./models/Volqueta.js";
import { vencimientoLicenciasDocumentos } from "./alertas/vencimientoLicenciasDocumentos";
import { verificacionDeFecha } from "./alertas/verificacionDeFecha";

async function main() {
  try {
    await startConnection();
    console.log("Database connected...");

    app.listen(app.get("port"), () => {
      console.log(`NODE Server is running on port: ${app.get("port")}`);
    });

    // Apagado satisfactorio con SIGINT o SIGTERM...
    process.on("SIGINT", () => {
      console.log("Received SIGINT signal, shutting down...");
      mongoose.connection.close(() => {
        console.log("MongoDB connection closed...");
        process.exit(0);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

main();

cron.schedule("0 8 * * *", () => {
  console.log("Ejecutando tarea de cron para verificar vencimientos.");
  vencimientoLicenciasDocumentos();
});
cron.schedule("0 0 1 * *", () => {
  console.log("Ejecutando tarea de cron para verificar fechas.");
  verificacionDeFecha();
});
