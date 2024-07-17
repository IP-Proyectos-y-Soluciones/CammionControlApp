import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import cargaPesadaRoutes from './routes/cargaPesada.routes';
import documentosRoutes from './routes/documento.routes';
import licenciasRoutes from './routes/licencia.routes';
import personasRoutes from './routes/persona.routes';
import usuariosRoutes from './routes/usuario.routes';
import volquetasRoutes from './routes/volqueta.routes';

dotenv.config();

const app = express();

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

// Routes...
app.use('/api/auth', authRoutes);
app.use('/api/cargapesada', cargaPesadaRoutes);
app.use('/api/documentos', documentosRoutes);
app.use('/licencias', licenciasRoutes);
app.use('/api/personas', personasRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/volquetas', volquetasRoutes);

// Test route...
app.get('/', (req, res) => {
  res.end(
    `Welcome to Backend Node.js Server. Running on port: ${app.get(
      'port',
    )}...!`,
  );
});

export default app;
