import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Settings...
app.set('port', process.env.PORT || 8585 || 3070);

// Middlewares...
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
// app.use(
//   cors({
//     origin: 'http://localhost:5173',
//     credentials: true,
//   }),
// );

// Routes...
// ...
// ...
// ...

app.get('/', (req, res) => {
  res.end(
    `Welcome to Backend Node.js Server. Running on port: ${app.get(
      'port',
    )}...!`,
  );
});

export default app;
