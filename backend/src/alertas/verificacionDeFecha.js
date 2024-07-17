import Persona from "../models/Persona";
export const verificacionDeFecha = async () => {
  try {
    const fecha = new Date();
    const mesActual = fecha.getMonth() + 1;

    const personas = await Persona.find({});
    const listaCumpleañios = personas.filter((empleado) => {
      const mes = new Date(empleado.fecha_nacimiento).getMonth() + 1;
      return mes === mesActual;
    });
    if (listaCumpleañios.length > 0) {
      console.log("Personas que cumplenaños este mes:", listaCumpleañios);
    }

    const listaFinalContrato = personas.filter((empleado) => {
      const mes = new Date(empleado.fecha_final_contrato).getMonth() + 1;
      return mes === mesActual;
    });
    if (listaFinalContrato > 0) {
      console.log("Contratos proximos a vencer este mes", listaFinalContrato);
    }
  } catch (error) {
    console.log("Error al validar las fechas");
  }
};
