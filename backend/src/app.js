import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import personasRoutes from './routes/personas.routes';
import usuariosRoutes from './routes/usuarios.routes';
import cargaPesadaRoutes from './routes/cargaPesada.routes';

dotenv.config();

const app = express();

// Settings...
app.set('port', process.env.PORT || 8585 || 3070);

// Middlewares...
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/personas', personasRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/cargapesada', cargaPesadaRoutes);

// // Manejo de errores CSRF...
// app.use((err, req, res, next) => {
//   if (err.code === 'EBADCSRFTOKEN') {
//     return res.status(403).json({
//       message: 'CSRF token inválido o falta de token CSRF',
//     });
//   }
//   next(err);
// });

// Test route...
app.get('/', (req, res) => {
  res.end(
    `Welcome to Backend Node.js Server. Running on port: ${app.get(
      'port',
    )}...!`,
  );
});

export default app;
