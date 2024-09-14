import Persona from '../models/Persona';
import Vehiculo from '../models/Vehiculo';

export const findVehicleAndDriver = async (vehicleReg, driverDni) => {
    try {
        // Buscar vehículo por la placa...
        const vehicle = await Vehiculo.findOne({ placa: vehicleReg });

        // Si no se encuentra el vehículo, devuelve false...
        if (!vehicle) {
            return {
                found: false,
                message: `El vehículo con placas: ${vehicleReg} NO se encuentra registrado...!`,
            };
        }

        // Buscar el conductor por cédula...
        const driver = await Persona.findOne({ cedula: driverDni });

        // Si no se encuentra el conductor, devuelve false...
        if (!driver) {
            return {
                found: false,
                message: `El conductor con cédula: ${driverDni} NO se encuentra registrado...!`,
            };
        }

        // Si ambos se encuentran, devuelve true y los _id de ambos...
        return {
            found: true,
            vehicleId: vehicle._id,
            driverId: driver._id,
        };
    } catch (error) {
        throw new Error(
            `Error al buscar vehículo o conductor: ${error.message}`,
        );
    }
};

// export const updateFields = async (model, id, field, value) => {
//     try {
//         // Actualiza el campo del documento...
//         const updatedDocument = await model.findByIdAndUpdate(
//             id,
//             { $push: { [field]: value } },
//             { new: true },
//         );

//         if (!updatedDocument) {
//             throw new Error(`No se encontró el documento con id: ${id}`);
//         }

//         return updatedDocument;
//     } catch (error) {
//         throw new Error(`Error al actualizar el documento: ${error.message}`);
//     }
// };
