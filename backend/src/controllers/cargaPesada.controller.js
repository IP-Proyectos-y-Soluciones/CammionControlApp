import CargaPesada from '../models/CargaPesada';
import Persona from '../models/Persona';
import Vehiculo from '../models/Vehiculo';

export const createHeavyLoadForm = async (req, res) => {
  try {
    const {
      n_planilla,
      fecha_inicio,
      fecha_final,
      placas,
      conductorId,
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

    // Se verifica si existe la persona...
    const person = await Persona.findById(conductorId);

    if (!person)
      return res
        .status(404)
        .json({ message: 'Persona no encontrada...!' });

    // Se verifica si existe el vehículo...
    const vehicle = await Vehiculo.findById(placas);

    if (!vehicle)
      return res
        .status(404)
        .json({ message: 'Vehículo no encontrado...!' });

    // Sumatoria de todos los anticipos recibidos...
    let totalAdvance =
      parseInt(anticipo_empresa) +
      parseInt(anticipo_cliente);

    // Sumatoria de todos los gastos...
    let totalSpends =
      parseInt(acpm) +
      parseInt(peaje) +
      parseInt(mantenimiento) +
      parseInt(mecanico) +
      parseInt(otros);

    // Saldo total...
    let totalBalance =
      parseInt(valor_flete) - totalAdvance - totalSpends;

    const newHeavyLoad = new CargaPesada({
      n_planilla,
      fecha_inicio,
      fecha_final,
      placas: vehicle._id,
      conductor: person._id,
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

    return res.status(201).json({
      message:
        'Una nueva planilla de "Carga Pesada" ha sido registrada exitosamente...!',
      savedHeavyLoad,
    });
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
        message:
          'No se ha encontrado ninguna planilla de "Carga Pesada"...!',
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

export const getHeavyLoadByFormNumber = async (
  req,
  res,
) => {
  try {
    const { n_planilla } = req.params;

    const findHeavyLoadForm = await CargaPesada.findOne({
      n_planilla: n_planilla,
    });

    if (!findHeavyLoadForm) {
      return res.status(404).json({
        message:
          'No se encontró ninguna planilla de Carga Pesada...!',
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

    const findHeavyLoadFormID = await CargaPesada.findById(
      _id,
    );

    console.log(findHeavyLoadFormID);

    if (!findHeavyLoadFormID) {
      return res.status(404).json({
        message:
          'No se encontró ninguna planilla de Carga Pesada...!',
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

// export const updateHeavyLoadForm = async (req, res) => {};

// export const deleteHeavyLoadForm = async (req, res) => {};
