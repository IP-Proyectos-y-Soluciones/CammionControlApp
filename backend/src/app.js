import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import personasRoutes from './routes/persona.routes';
import usuariosRoutes from './routes/usuario.routes';
import tanqueosRoutes from './routes/tanqueo.routes.js'
import mecanicoRoutes from './routes/mecanico.routes.js';
import vehiculoRoutes from './routes/vehiculo.routes.js';
import cloudinaryRoutes from './routes/cloudinary.routes.js';
import documentosRoutes from "./routes/documento.routes";
import licenciaRoutes from "./routes/licencia.routes";
import VolquetaRoutes from "./routes/volqueta.routes";
dotenv.config();

const app = express();

// Settings...
app.set("port", process.env.PORT || 8585 || 3070);

// Middlewares...
app.use(morgan('dev'));
app.use(cors());
// app.use(
//   cors({
//     origin: 'http://localhost:5173/',
//     credentials: true,
//   }),
// );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



// Routes...
app.use("/api/auth", authRoutes);
app.use("/api/personas", personasRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/documentos", documentosRoutes);
app.use("/api/licencia", licenciaRoutes);
app.use("/api/planilla", VolquetaRoutes);
app.use('/api/tanqueo', tanqueosRoutes);
app.use('/api/mecanico', mecanicoRoutes);
app.use('/api/vehiculo', vehiculoRoutes);
app.use('/api/cloudinary', cloudinaryRoutes);

// Test route...
app.get('/', (req, res) => {
  res.end(
    `Welcome to Backend Node.js Server. Running on port: ${app.get("port")}...!`
  );
});

export default app;

