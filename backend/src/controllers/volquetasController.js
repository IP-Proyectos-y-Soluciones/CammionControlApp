import Volqueta from "../models/Volqueta";
import Persona from "../models/Persona";
import Vehiculo from "../models/Vehiculo";

export const createVolqueta = async (req, res) => {
  try {
    const {
      n_planilla,
      fecha,
      placas,
      conductor_id,
      cliente,
      volmts3,
      n_viajes,
      material,
      hora_inicio,
      hora_final,
      total_horas,
      km_inicial,
      km_final,
      total_km_dia,
      lugar_de_cargue,
      lugar_de_descargue,
      observacion,
    } = req.body;

    const persona = await Persona.findById(conductor_id);
    if (!persona) {
      return res.status(404).json({
        message: "El id de la persona no existe",
      });
    }
    const vehiculo_id = await Vehiculo.findById(placas);
    if (vehiculo_id) {
      return res.status(404).json({
        message: "Las placas del vehiculo no existe",
      });
    }
    const newVolqueta = new Volqueta({
      n_planilla,
      fecha,
      placas,
      conductor_id,
      cliente,
      volmts3,
      n_viajes,
      material,
      hora_inicio,
      hora_final,
      total_horas,
      km_inicial,
      km_final,
      total_km_dia,
      lugar_de_cargue,
      lugar_de_descargue,
      observacion,
    });
    res.status(200).json({
      message: "el formulario fue guardado correctamente!",
      newVolqueta,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
