import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
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

// Settings...
app.set('port', process.env.PORT || 8585 || 3070);

// Middlewares...
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes...
app.use('/api/auth', authRoutes);
app.use('/api/cargapesada', cargaPesadaRoutes);
app.use('/api/cloudinary', cloudinaryRoutes);
app.use('/api/documentos', documentosRoutes);
app.use('/api/licencias', licenciasRoutes);
app.use('/api/mecanicos', mecanicosRoutes);
app.use('/api/personas', personasRoutes);
app.use('/api/tanqueos', tanqueosRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/vehiculos', vehiculosRoutes);
app.use('/api/planillas', volquetasRoutes);

// Test route...
app.get('/', (req, res) => {
  res.end(
    `Welcome to Backend Node.js Server. Running on port: ${app.get(
      'port',
    )}...!`,
  );
});

export default app;
