import Volqueta from "../models/Volqueta";
import Persona from "../models/Persona";
import Vehiculo from "../models/Vehiculo";
import { plantillaVolquetas } from "../pdf-excel/plantilla_volquetas";
import { generarNumeroPlanilla } from "../pdf-excel/generarNumeroPlanilla";

export const createVolqueta = async (req, res) => {
  try {
    const {
      fecha,
      placa_vehiculo,
      cedula,
      cliente,
      volmts3,
      n_viajes,
      material,
      hora_inicio,
      hora_final,
      km_inicial,
      km_final,
      honorarios,
      lugar_de_cargue,
      lugar_de_descargue,
      observacion,
    } = req.body;

    const generateCN = generarNumeroPlanilla(); // Genera el número de planilla

    const driver = await Persona.findOne({ cedula: cedula });
    if (!driver) {
      return res.status(404).json({
        message: `El conductor con la cédula ${cedula} NO se encuentra registrado...!`,
      });
    }
    const vehicle = await Vehiculo.findOne({ placa: placa_vehiculo });
    if (!vehicle) {
      return res.status(404).json({
        message: `El vehículo con placas ${placa_vehiculo} NO se encuentra registrado...!`,
      });
    }

    let total_horas = 0;
    let startH;
    let endH;
    let horaTotal = 0;

    if (hora_inicio && hora_final) {
      const start = new Date(hora_inicio);
      const end = new Date(hora_final);

      const timezoneOffset = new Date().getTimezoneOffset(); // Devuelve el offset en minutos...

      startH = new Date(start.getTime() - timezoneOffset * 60000);
      endH = new Date(end.getTime() - timezoneOffset * 60000);

      total_horas = (endH - startH) / (1000 * 60 * 60);
      horaTotal = total_horas.toFixed(2); // Asigna el valor calculado a horaTotal
    }

    const total_km_dia = km_final - km_inicial;

    const volquetaData = new Volqueta({
      n_planilla: generateCN,
      fecha,
      placa_vehiculo,
      placa: vehicle._id,
      conductor_cedula: cedula,
      conductor: driver._id,
      cliente,
      volmts3,
      n_viajes,
      material,
      hora_inicio: startH,
      hora_final: endH,
      total_horas: horaTotal,
      km_inicial,
      km_final,
      total_km_dia,
      honorarios,
      lugar_de_cargue,
      lugar_de_descargue,
      observacion,
    });

    const newVolqueta = await volquetaData.save();

    const volquetaCompleta = await Volqueta.findById(newVolqueta._id)
      .populate("conductor", "nombres apellidos")
      .populate("placa", "placa");

    console.log("Llamando a la función plantillaVolquetas con los datos:");
    console.log(volquetaCompleta);

    plantillaVolquetas([volquetaCompleta], res);

    await Persona.findOneAndUpdate(
      driver._id,
      // { $set: updateDataDriver },
      { $push: { volquetas: newVolqueta._id } },
      { new: true }
    );
    //
    await Vehiculo.findOneAndUpdate(
      vehicle._id,
      // { $set: updateDataVehicle },
      { $push: { volquetas: newVolqueta._id } },
      { new: true }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error al crear la planilla" });
  }
};

export const getVolqueta = async (req, res) => {
  try {
    const { n_planilla, conductor_cedula, placa_vehiculo } = req.query;
    const query = {};

    if (n_planilla) query.n_planilla = n_planilla;
    if (conductor_cedula) query.conductor = conductor_cedula;
    if (placa_vehiculo) query.placa_vehiculo = placa_vehiculo;

    const planilla = await Volqueta.find(query)
      .populate("conductor_cedula")
      .populate("placa_vehiculo");

    if (planilla.length === 0) {
      return res.status(404).json({ message: "Planilla no encontrada" });
    }

    res.status(200).json({
      message: "Planilla encontrada",
      planilla,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las planillas",
      error: error.message,
    });
  }
};

export const putVolqueta = async (req, res) => {
  try {
    const { n_planilla } = req.params;
    const updateData = req.body;

    let query = {};
    console.log(req.params);
    if (n_planilla) {
      query = { n_planilla };
    } else {
      return res.status(400).json({ message: "n_planilla es requerido" });
    }

    // Cálculo de total_horas si `hora_inicio` y `hora_final` están presentes
    if (updateData.hora_inicio && updateData.hora_final) {
      const horaInicio = new Date(updateData.hora_inicio);
      const horaFinal = new Date(updateData.hora_final);
      const diferenciaHoras = (horaFinal - horaInicio) / (1000 * 60 * 60); // Convertir milisegundos a horas
      updateData.total_horas = diferenciaHoras.toFixed(2); // Guardar con dos decimales
    }

    // Cálculo de total_km_dia si `km_inicial` y `km_final` están presentes
    if (updateData.km_inicial && updateData.km_final) {
      const kmInicial = parseFloat(updateData.km_inicial);
      const kmFinal = parseFloat(updateData.km_final);
      const totalKm = kmFinal - kmInicial;
      updateData.total_km_dia = totalKm;
    }

    // Buscar y actualizar el documento
    const volquetaActualizada = await Volqueta.findOneAndUpdate(
      query,
      updateData,
      {
        new: true, // Devuelve el documento actualizado
        runValidators: true, // Ejecuta validaciones del modelo
      }
    );

    // Si no encuentra la volqueta, devolver error
    if (!volquetaActualizada) {
      return res.status(404).json({ message: "Volqueta no encontrada" });
    }

    console.log(volquetaActualizada);
    plantillaVolquetas([volquetaActualizada]);

    // Responder con el documento actualizado
    res.status(200).json(volquetaActualizada);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error actualizando volqueta", error: error.message });
  }
};

export const deleteVolqueta = async (req, res) => {
  try {
    const { n_planilla } = req.params;

    let query = {};
    console.log(n_planilla);

    if (n_planilla) {
      query.n_planilla = n_planilla;
    } else {
      return res.status(400).json({ message: "Se requiere el n_planilla." });
    }
    const planilla = await Volqueta.findOneAndDelete(query);
    if (!planilla) {
      return res.status(404).json({ message: "Planilla no encontrada" });
    }
    res.status(200).json({
      message: "La planilla ha sido eliminada correctamente!",
      planilla,
    });
  } catch (error) {
    //res.status(500).json(error);
    console.log(error.message);
  }
};
