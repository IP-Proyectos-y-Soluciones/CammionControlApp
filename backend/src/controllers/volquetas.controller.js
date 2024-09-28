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

    if (hora_inicio && hora_final) {
      const start = new Date(hora_inicio);
      const end = new Date(hora_final);
      //
      const timezoneOffset = new Date().getTimezoneOffset(); // Devuelve el offset en minutos...
      //
      startH = new Date(start.getTime() - timezoneOffset * 60000);
      endH = new Date(end.getTime() - timezoneOffset * 60000);

      total_horas = (endH - startH) / (1000 * 60 * 60);
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
      total_horas,
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

    plantillaVolquetas([volquetaCompleta]);

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

    res.status(200).json({
      message: "El formulario fue guardado correctamente!",
      newVolqueta,
    });
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
    /* const {
      fecha,
      placa_vehiculo,
      conductor_cedula,
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
    } = req.body;*/
    const { _id, n_planilla } = req.params;
    const { conductor_cedula } = req.body;
    const updateData = req.body;
    let filter = {};

    if (_id && /^[0-9a-fA-F]{24}$/.test(_id)) {
      filter = { _id };
    } else if (conductor_cedula) {
      filter = { conductor_cedula: Number(conductor_cedula) };
    } else if (n_planilla) {
      filter = { n_planilla: String(n_planilla) };
    } else {
      return res.status(400).json({
        message: "Debe proporcionar _id válido o nro. de cédula...!",
      });
    }

    const findPlanilla = await Volqueta.findOne(filter);

    if (!findPlanilla)
      return res.status(404).json({ message: "Planilla no existe" });

    const driver = await Persona.findOne({ cedula: conductor_cedula });
    if (!driver) {
      return res.status(404).json({
        message: `El conductor con la cédula ${conductor_cedula} NO se encuentra registrado...!`,
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

    if (hora_inicio && hora_final) {
      const start = new Date(hora_inicio);
      const end = new Date(hora_final);
      //
      const timezoneOffset = new Date().getTimezoneOffset(); // Devuelve el offset en minutos...
      //
      startH = new Date(start.getTime() - timezoneOffset * 60000);
      endH = new Date(end.getTime() - timezoneOffset * 60000);

      total_horas = (endH - startH) / (1000 * 60 * 60);
    }

    const total_km_dia = km_final - km_inicial;
    const planilla = await Volqueta.findByIdAndUpdate(
      { n_planilla: n_planilla },
      {
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
        total_horas,
        km_inicial,
        km_final,
        total_km_dia,
        honorarios,
        lugar_de_cargue,
        lugar_de_descargue,
        observacion,
      },
      { new: true }
    );

    if (!planilla) {
      return res.status(404).json({
        message: "Planilla no encontrada",
      });
    }
    console.log(planilla);
    plantillaVolquetas([planilla]);

    res.status(200).json({
      message: "El formulario fue actualizado correctamente!",
      planilla,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteVolqueta = async (req, res) => {
  try {
    const planilla = await Volqueta.findByIdAndDelete(req.params.n_planilla);
    if (!planilla) {
      return res.status(404).json({ message: "Planilla no encontrada" });
    }
    res.status(200).json({
      message: "La planilla ha sido eliminada correctamente!",
      planilla,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
