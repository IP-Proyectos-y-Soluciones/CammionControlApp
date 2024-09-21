self.addEventListener('install', (event) => {
    console.log('Service worker installing...');
    // Añade archivos al cache
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activating...');
});

self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    // Puedes añadir lógica para servir archivos del cache
});
