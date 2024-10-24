export const generarNumeroPlanilla = () => {
  const fecha = new Date();
  const año = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const dia = String(fecha.getDate()).padStart(2, "0");
  const numeroAleatorio = Math.floor(100000 + Math.random() * 900000);

  return `YM${año}${mes}${dia}-${numeroAleatorio}`;
};
