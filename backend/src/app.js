import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
// import csrfMiddleware, {
//   generateCsrfToken,
//   verifyCsrfToken,
//   handleCsrfError,
// } from './middlewares/csrfMiddleware'; // Activar para la produccón..
//
import { AuxAuthMiddleware } from './middlewares/auxAuthMiddleware'; // Debe suprimirse para producción...
//
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

dotenv.config();

const app = express();

// Settings...
app.set('port', process.env.PORT || 8585 || 3070);

// Middlewares...
app.use(morgan('dev'));
// Aquí, la URL (Front local) debe sustituirse por la URL del Front desplegado...
app.use(
  cors({
    // origin: 'http://localhost:5173',
    origin: process.env.URL_FRONTEND,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Middleware para generar el token CSRF...
// app.use(generateCsrfToken); Activar para la producción... // ******

// Routes...
app.use('/api/auth', authRoutes);
//
app.use(
  '/api/admin',
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  adminRoutes,
);
//
app.use(
  '/api/cargapesada',
  // verifyCsrfToken, // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  cargaPesadaRoutes,
);
//
app.use(
  '/api/cloudinary',
  // verifyCsrfToken, // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  cloudinaryRoutes,
);
//
app.use(
  '/api/documentos',
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  documentosRoutes,
);
//
app.use(
  '/api/licencias',
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  licenciasRoutes,
);
//
app.use(
  '/api/mecanicos',
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  mecanicosRoutes,
);
//
app.use(
  '/api/personas',
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  personasRoutes,
);
//
app.use('/api/tanqueos', tanqueosRoutes);
app.use(
  '/api/usuarios',
  // verifyCsrfToken,
  AuxAuthMiddleware, // Desactivar para la producción...
  usuariosRoutes,
);
//
app.use(
  '/api/vehiculos',
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  vehiculosRoutes,
);
//
app.use(
  '/api/planillas',
  // verifyCsrfToken,  // CON PROTECCION CSRF... Activar para la producción...
  AuxAuthMiddleware, // Desactivar para la producción...
  volquetasRoutes,
);

// // Ruta para obtener el token CSRF... // Activar
// app.use(csrfMiddleware);

// // Middleware para manejo de errores CSRF...
// app.use(handleCsrfError);

// Test route...
app.get('/', (req, res) => {
  res.end(
    `Welcome to Backend Node.js Server. Running on port: ${app.get(
      'port',
    )}...!`,
  );
});

export default app;
