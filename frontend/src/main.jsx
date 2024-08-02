import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//    navigator.serviceWorker
//     .register("/service-worker.js")
//       .then((registration) => {
//        console.log("Service Worker registrado con éxito:", registration);
//      })
//       .catch((error) => {
//        console.log("Error al registrar el Service Worker:", error);
//      });
//   });
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)


