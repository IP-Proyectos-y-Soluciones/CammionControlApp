import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import csrf from 'csrf';
import authRoutes from './routes/auth.routes';
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
const csrfProtection = new csrf();

// Settings...
app.set('port', process.env.PORT || 8585 || 3070);

// Middlewares...
app.use(morgan('dev'));
// app.use(
//   cors({
//     origin: 'http://localhost:5173',
//     credentials: true,
//   }),
// );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Generar y enviar el token CSRF...
app.use((req, res, next) => {
  const csrfToken = csrfProtection.create(
    req.cookies['csrf-secret'] ||
      csrfProtection.secretSync(),
  );

  res.cookie('csrf-token', csrfToken, {
    sameSite: 'none',
    secure: true,
  });
  res.locals.csrfToken = csrfToken;

  next();
});

// Middleware para verificar el token CSRF...
const verifyCsrfToken = (req, res, next) => {
  const csrfToken = req.cookies['csrf-token'];
  const csrfSecret = req.cookies['csrf-secret'];

  if (csrfProtection.verify(csrfSecret, csrfToken)) {
    next();
  } else {
    res.status(403).json({
      message: 'Token CSRF inválido o perdido...',
    });
  }
};

// Routes...
app.use('/api/auth', authRoutes);
app.use('/api/cargapesada', cargaPesadaRoutes);
app.use('/api/cloudinary', cloudinaryRoutes);
app.use('/api/documentos', documentosRoutes);
app.use('/api/licencias', licenciasRoutes);
app.use('/mecanicos', mecanicosRoutes);
// app.use('/api/personas', personasRoutes); // sin protección CSRF...
app.use('/api/personas', verifyCsrfToken, personasRoutes); // CON PROTECCION CSRF...
app.use('/tanqueos', tanqueosRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/vehiculos', vehiculosRoutes);
app.use('/api/planillas', volquetasRoutes);

app.use((err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    // Manejo de error CSRF
    res.status(403).json({
      message: 'Token CSRF inválido o perdido...',
    });
  } else {
    next(err);
  }
});

// Test route...
app.get('/', (req, res) => {
  res.end(
    `Welcome to Backend Node.js Server. Running on port: ${app.get(
      'port',
    )}...!`,
  );
});

// Ruta para obtener el token CSRF...
app.use('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: res.locals.csrfToken });
});

export default app;
