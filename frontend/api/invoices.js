import axios from "./axios";

export const getImageRefuelingByDNIAndInvoiceRequest = (cedula, recibo) =>
    axios.get(`/images/image/${cedula}/${recibo}`, {
        responseType: 'blob',  // Esto asegura que se reciba la imagen como un archivo binario...
    });