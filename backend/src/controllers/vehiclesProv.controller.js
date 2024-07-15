import Vehiculo from '../models/Vehiculo';
import Persona from '../models/Persona';

export const addNewVehicle = async (req, res) => {
  try {
    const {
      placa,
      tipo_de_combustible,
      clase_de_vehiculo,
      marca,
      color,
      propietarioId,
    } = req.body;

    const findPersona = await Persona.findById(
      propietarioId,
    );

    if (!findPersona)
      return res
        .status(404)
        .json({ message: 'Persona no encontrada...!' });

    const vehicle = new Vehiculo({
      placa,
      tipo_de_combustible,
      clase_de_vehiculo,
      marca,
      color,
      propietario: findPersona._id,
    });

    const newVehicle = await vehicle.save();

    return res.status(201).json({
      message: 'Un nuevo vehículo ha sido registrado...!',
      newVehicle,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
