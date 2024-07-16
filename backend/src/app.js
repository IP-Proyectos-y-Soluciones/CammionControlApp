import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routhes";
import personasRoutes from "./routes/personas.routhes";
import usuariosRoutes from "./routes/usuarios.routhes";
import documentosRoutes from "./routes/documento.routes";
import licenciaRoutes from "./routes/licencia.routes";
import VolquetaRoutes from "./routes/volquetas.routes";
dotenv.config();

const app = express();

// Settings...
app.set("port", process.env.PORT || 8585 || 3070);

// Middlewares...
app.use(morgan("dev"));
app.use(cors());
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
app.use("/api/auth", authRoutes);
app.use("/api/personas", personasRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/documentos", documentosRoutes);
app.use("/api/licencia", licenciaRoutes);
app.use("/api/planilla", VolquetaRoutes);
// Test route...
app.get("/", (req, res) => {
  res.end(
    `Welcome to Backend Node.js Server. Running on port: ${app.get("port")}...!`
  );
});

export default app;
