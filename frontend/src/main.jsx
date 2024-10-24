import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>,
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// // import "bootstrap/dist/css/bootstrap.min.css";
// import './index.css';
// import { Provider } from 'react-redux';
// import { applyMiddleware, createStore } from 'redux'
// import rootReducer from './redux/index.js'
// import { thunk } from 'redux-thunk'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();

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
// const store = createStore(rootReducer, applyMiddleware(thunk));

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//     <Provider store={store}>
//     <App />
//     </Provider>
//     </QueryClientProvider>
//   </React.StrictMode>
//   ,
// )
