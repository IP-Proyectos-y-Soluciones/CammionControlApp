<<<<<<< HEAD
import CargaPesada from '../models/CargaPesada';
import Persona from '../models/Persona';
import Vehiculo from '../models/Vehiculo';
import { plantillaCargaPesada } from '../others/planilla_cargaPesada';
import { generarNumeroPlanilla } from '../libs/GenRandomControlNumb';

export const createHeavyLoadForm = async (req, res) => {
    try {
        // const {
        //     fecha_inicio,
        //     fecha_final,
        //     placa_vehiculo,
        //     conductor_cedula,
        //     ciudad_inicio,
        //     ciudad_destino,
        //     empresa,
        //     valor_flete,
        //     anticipo_empresa,
        //     anticipo_cliente,
        //     acpm,
        //     peaje,
        //     mantenimiento,
        //     mecanico,
        //     otros,
        // } = req.body;
        const {
            n_planilla,
            fecha_inicio,
            fecha_final,
            placa_vehiculo,
            conductor_cedula,
            ciudad_inicio,
            ciudad_destino,
            empresa,
            valor_flete,
            anticipo_empresa,
            anticipo_cliente,
            acpm,
            peaje,
            mantenimiento,
            mecanico,
            otros,
        } = req.body;
=======
import CargaPesada from "../models/CargaPesada";
import Persona from "../models/Persona";
import Vehiculo from "../models/Vehiculo";
import { plantillaCargaPesada } from "../pdf-excel/planilla_cargaPesada";
import { generarNumeroPlanilla } from "../pdf-excel/generarNumeroPlanilla";

export const createHeavyLoadForm = async (req, res) => {
  try {
    const {
      fecha_inicio,
      fecha_final,
      placa_vehiculo,
      conductor_cedula,
      ciudad_inicio,
      ciudad_destino,
      empresa,
      valor_flete,
      anticipo_empresa,
      anticipo_cliente,
      acpm,
      peaje,
      mantenimiento,
      mecanico,
      otros,
    } = req.body;
>>>>>>> origin/Dianis2

    const generaCN = generarNumeroPlanilla();

<<<<<<< HEAD
        // Se verifica si existe el vehículo...
        const vehicle = await Vehiculo.findOne({
            placa: placa_vehiculo,
        });
        //
        if (!vehicle) {
            return res.status(404).json({
                message: `El vehículo con placa ${placa_vehiculo} NO se encuentra registrado...!`,
            });
        }

        // // // const generateCN = generarNumeroPlanilla();

        // Sumatoria de todos los anticipos recibidos...
        let totalAdvance =
            parseInt(anticipo_empresa) + parseInt(anticipo_cliente);

        // Sumatoria de todos los gastos...
        let totalSpends =
            parseInt(acpm) +
            parseInt(peaje) +
            parseInt(mantenimiento) +
            parseInt(mecanico) +
            parseInt(otros);

        // Saldo total...
        let totalBalance = parseInt(valor_flete) - totalAdvance - totalSpends;

        const newHeavyLoad = new CargaPesada({
            // n_planilla: generateCN,
            n_planilla,
            fecha_inicio,
            fecha_final,
            placa_vehiculo,
            placa: vehicle._id,
            conductor_cedula,
            conductor: driver._id,
            ciudad_inicio,
            ciudad_destino,
            empresa,
            valor_flete,
            anticipo_empresa,
            anticipo_cliente,
            acpm,
            peaje,
            mantenimiento,
            mecanico,
            otros,
            total_anticipos_fletesPagados: totalAdvance,
            total_gastos: totalSpends,
            total_saldo: totalBalance,
        });

        const savedHeavyLoad = await newHeavyLoad.save();

        const upHeavyLoad = await CargaPesada.findById(savedHeavyLoad._id)
            .populate('conductor', 'nombres apellidos')
            .populate('placa', 'placa');

        console.log(upHeavyLoad);

        plantillaCargaPesada([upHeavyLoad]);

        await Persona.findByIdAndUpdate(
            driver._id,
            { $push: { carga_pesada: savedHeavyLoad._id } },
            { new: true },
        );

        await Vehiculo.findByIdAndUpdate(
            vehicle._id,
            { $push: { cargaPesada: savedHeavyLoad._id } },
            { new: true },
        );

        return res.status(201).json({
            message: `La planilla de "Carga Pesada" Nº ${savedHeavyLoad.n_planilla} ha sido registrada exitosamente...!!!`,
            savedHeavyLoad,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        } else {
            return res.status(500).json(error);
        }
=======
    // Se verifica si existe el conductor...
    const driver = await Persona.findOne({ cedula: conductor_cedula });
    //
    if (!driver) {
      return res.status(404).json({
        message: `El conductor con la cédula ${conductor_cedula} NO se encuentra registrado...!`,
      });
>>>>>>> origin/Dianis2
    }

    // Se verifica si existe el vehículo...
    const vehicle = await Vehiculo.findOne({
      placa: placa_vehiculo,
    });
    //
    if (!vehicle) {
      return res.status(404).json({
        message: `El vehículo con placa ${placa_vehiculo} NO se encuentra registrado...!`,
      });
    }

    // Sumatoria de todos los anticipos recibidos...
    let totalAdvance = parseInt(anticipo_empresa) + parseInt(anticipo_cliente);

    // Sumatoria de todos los gastos...
    let totalSpends =
      parseInt(acpm) +
      parseInt(peaje) +
      parseInt(mantenimiento) +
      parseInt(mecanico) +
      parseInt(otros);

    // Saldo total...
    let totalBalance = parseInt(valor_flete) - totalAdvance - totalSpends;

    const newHeavyLoad = new CargaPesada({
      n_planilla: generaCN,
      fecha_inicio,
      fecha_final,
      placa_vehiculo,
      placa: vehicle._id,
      conductor_cedula,
      conductor: driver._id,
      ciudad_inicio,
      ciudad_destino,
      empresa,
      valor_flete,
      anticipo_empresa,
      anticipo_cliente,
      acpm,
      peaje,
      mantenimiento,
      mecanico,
      otros,
      total_anticipos_fletesPagados: totalAdvance,
      total_gastos: totalSpends,
      total_saldo: totalBalance,
    });

    const savedHeavyLoad = await newHeavyLoad.save();

    const upHeavyLoad = await CargaPesada.findById(savedHeavyLoad._id)
      .populate("conductor", "nombres apellidos")
      .populate("placa", "placa");

    console.log(upHeavyLoad);

    plantillaCargaPesada([upHeavyLoad], res);

    await Persona.findByIdAndUpdate(
      driver._id,
      { $push: { carga_pesada: savedHeavyLoad._id } },
      { new: true }
    );

    await Vehiculo.findByIdAndUpdate(
      vehicle._id,
      { $push: { cargaPesada: savedHeavyLoad._id } },
      { new: true }
    );
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

export const getAllHeavyLoadForms = async (req, res) => {
  try {
    const showAllHeavyLoadForms = await CargaPesada.find();

    if (!showAllHeavyLoadForms)
      return res.status(404).json({
        message: 'No se ha encontrado ninguna planilla de "Carga Pesada"...!',
      });

    return res.status(200).json(showAllHeavyLoadForms);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

export const getHeavyLoadByFormNumber = async (req, res) => {
  try {
    const { n_planilla } = req.params;

    const findHeavyLoadForm = await CargaPesada.findOne({
      n_planilla: n_planilla,
    });

    if (!findHeavyLoadForm) {
      return res.status(404).json({
        message: "No se encontró ninguna planilla de Carga Pesada...!",
      });
    }

    return res.status(200).json(findHeavyLoadForm);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};

export const getHeavyLoadByFormID = async (req, res) => {
  try {
    const { _id } = req.params;

    console.log(_id);

    const findHeavyLoadFormID = await CargaPesada.findById(_id);

    console.log(findHeavyLoadFormID);

    if (!findHeavyLoadFormID) {
      return res.status(404).json({
        message: "No se encontró ninguna planilla de Carga Pesada...!",
      });
    }

    return res.status(200).json(findHeavyLoadFormID);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};
