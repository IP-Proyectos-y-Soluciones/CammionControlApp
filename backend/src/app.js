import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
// import csrfMiddleware, {
//   generateCsrfToken,
//   verifyCsrfToken,
//   handleCsrfError,
// } from './middlewares/csrfMiddleware'; // Activar para la produccón..
//
import { AuxAuthMiddleware } from "./middlewares/auxAuthMiddleware"; // Debe suprimirse para producción (Posiblemente quede)...
//
<<<<<<< HEAD
import { AuthAdmMiddleware } from './middlewares/authAdmMiddleware';
import authRoutes from './routes/auth.routes';
import adminRoutes from './routes/admin.routes';
import cargaPesadaRoutes from './routes/cargaPesada.routes';
import cloudinaryRoutes from './routes/cloudinary.routes';
import documentosRoutes from './routes/documento.routes';
import licenciasRoutes from './routes/licencia.routes';
import mecanicosRoutes from './routes/mecanico.routes';
import personasRoutes from './routes/persona.routes';
import tanqueosRoutes from './routes/tanqueo.routes';
import usuariosRoutes from './routes/usuario.routes';
import vehiculosRoutes from './routes/vehiculo.routes';
import volquetasRoutes from './routes/volqueta.routes';
import imageRoutes from './routes/image.routes';
=======
import { AuthAdmMiddleware } from "./middlewares/authAdmMiddleware";
import authRoutes from "./routes/auth.routes";
import adminRoutes from "./routes/admin.routes";
import cargaPesadaRoutes from "./routes/cargaPesada.routes";
import cloudinaryRoutes from "./routes/cloudinary.routes";
import documentosRoutes from "./routes/documento.routes";
import licenciasRoutes from "./routes/licencia.routes";
import mecanicosRoutes from "./routes/mecanico.routes";
import personasRoutes from "./routes/persona.routes";
import tanqueosRoutes from "./routes/tanqueo.routes";
import usuariosRoutes from "./routes/usuario.routes";
import vehiculosRoutes from "./routes/vehiculo.routes";
import volquetasRoutes from "./routes/volqueta.routes";
import imageRoutes from "./routes/image.routes";
>>>>>>> origin/Dianis2

dotenv.config();

const app = express();

// Settings...
app.set("port", process.env.PORT || 8585 || 3070);

// Configuración de express-session con connect-mongo...
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.URLDB_DEV, // Inhibir para producción...
      // mongoUrl: process.env.URL_DB, // Activar para producción...
      collectionName: "sessions",
      ttl: 2 * 24 * 60 * 60, // Opcional: Tiempo de vida de la sesión en segundos (aquí: 2 días)...
    }),
    cookie: {
      secure: false, // Cambia a true en producción con HTTPS...
      httpOnly: true, // Ayuda a prevenir ataques XSS...
      maxAge: 2 * 24 * 60 * 60 * 1000, // Opcional: Tiempo de vida de la cookie: 2 días en milisegundos...
    },
  })
);

// Middlewares...
app.use(morgan("dev"));
// Aquí, la URL (Front local) debe sustituirse por la URL del Front desplegado...
app.use(
  cors({
    origin: process.env.URL_FRONTEND_DEV,
    // origin: process.env.URL_FRONTEND_PROD,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Middleware para generar el token CSRF...
// app.use(generateCsrfToken); Activar para la producción... // ******

// Routes...
app.use("/api/auth", authRoutes);
//
app.use(
  "/api/admin",
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  adminRoutes
);
//
app.use(
<<<<<<< HEAD
    '/api/heavyload',
    // verifyCsrfToken, // CON PROTECCION CSRF... Activar para la producción...
    AuxAuthMiddleware, // Desactivar para la producción...
    // AuthAdmMiddleware,
    cargaPesadaRoutes,
=======
  "/api/heavyload",
  // verifyCsrfToken, // CON PROTECCION CSRF... Activar para la producción...
  /* AuxAuthMiddleware, // Desactivar para la producción...
  AuthAdmMiddleware,*/
  cargaPesadaRoutes
>>>>>>> origin/Dianis2
);
//
app.use(
  "/api/cloudinary",
  // verifyCsrfToken, // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  cloudinaryRoutes
);
//
// Esta es una alternativa a cloudinary...
app.use(
    '/api/images',
    // verifyCsrfToken, // CON PROTECCION CSRF... Activar para la producción...
    AuxAuthMiddleware,
    imageRoutes,
);
//
app.use(
  "/api/documentos",
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  AuthAdmMiddleware,
  documentosRoutes
);
//
app.use(
  "/api/licencias",
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  AuthAdmMiddleware,
  licenciasRoutes
);
//
app.use(
  "/api/mecanicos",
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  mecanicosRoutes
);
//
app.use(
  "/api/personas",
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  AuthAdmMiddleware,
  personasRoutes
);
//
app.use(
  "/api/refueling", // antiguamente 'tanqueos'...
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  tanqueosRoutes
);
//
app.use(
  "/api/usuarios",
  // verifyCsrfToken,
  AuxAuthMiddleware, // Desactivar para la producción... ////////////////
  AuthAdmMiddleware,
  usuariosRoutes
);
//
app.use(
  "/api/vehiculos",
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  AuthAdmMiddleware,
  vehiculosRoutes
);
//
app.use(
  "/api/volquetas",
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  //AuxAuthMiddleware, // Desactivar para la producción...
  volquetasRoutes
);
//
app.use(
  "/api/images",
  // verifyCsrfToken, // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware,
  imageRoutes
);

// // Ruta para obtener el token CSRF... // Activar
// app.use(csrfMiddleware);

// // Middleware para manejo de errores CSRF...
// app.use(handleCsrfError);

// Test route...
app.get("/", (req, res) => {
  res.end(
    `Welcome to Backend Node.js Server. Running on port: ${app.get("port")}...!`
  );
});

export default app;
