import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACK_URL_LOC}/api`,
  // baseURL: '/api',
  withCredentials: true,
});

// const instance = axios.create({
//   baseURL: `${import.meta.env.VITE_BACK_URL_DEPLOYED}/api`,
//   withCredentials: true,
// });

// ------------------------------------------------------------------------------------------------------- //
// // // *****  Activar para la producción... ***** // // //

// instance.interceptors.request.use(
//   async (config) => {
//     const csrfToken = document.cookie
//       .split('; ')
//       .find((row) => row.startsWith('csrf-token'))
//       ?.split('=')[1];

//     if (csrfToken) {
//       config.headers['csrf-token'] = csrfToken;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );
// ------------------------------------------------------------------------------------------------------- //

export default instance;






////////////////////////////////////////////////////////////////////////////////////////////////

// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:7000/api',
//   withCredentials: true,
// });

// // const instance = axios.create({
// //   baseURL: 'https://cammioncontrolapp.onrender.com/api',
// //   withCredentials: true,
// // });

// instance.interceptors.request.use(
//   async (config) => {
//     const csrfToken = document.cookie
//       .split('; ')
//       .find((row) => row.startsWith('csrf-token'))
//       ?.split('=')[1];

//     if (csrfToken) {
//       config.headers['csrf-token'] = csrfToken;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// export default instance;
