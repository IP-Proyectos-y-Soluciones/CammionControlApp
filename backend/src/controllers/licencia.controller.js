import Licencia from "../models/Licencia";
import Persona from "../models/Persona";

export const createLicencia = async (req, res) => {
  try {
    const {
      conductor_id,
      licencia_N,
      categoria,
      clase_de_vehiculo,
      servicio,
      fecha_expedicion,
      fecha_vencemiento,
    } = req.body;

    const persona = await Persona.findById(conductor_id);
    if (!persona) {
      return res.status(404).json({
        message: "El id de la persona no existe",
      });
    }
    const newLicencia = new Licencia({
      conductor_id,
      licencia_N,
      categoria,
      clase_de_vehiculo,
      servicio,
      fecha_expedicion,
      fecha_vencemiento,
    });
    res.status(200).json({
      message: "la licencia ha sido guardada correctamente!",
      newLicencia,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getLicencia = async (req, res) => {
  try {
    const { licencia_N, clase_de_vehiculo } = req.query;
    const query = {};

    if (licencia_N) query.licencia_N = licencia_N;
    if (clase_de_vehiculo) query.clase_de_vehiculo = clase_de_vehiculo;

    const licencias = await Licencia.find(query).populate("persona");
    if (licencias.length === 0) {
      return res.status(404).json({ message: "Licencia no encontrada" });
    }

    const dias = 7;
    const fecha = new Date();
    const alerta = licencias.filter((doc) => {
      const fechaVencimiento = new Date(doc.fecha_vencimiento);
      const diasRestantes = Math.ceil(
        (fechaVencimiento - fecha) / (1000 * 60 * 60 * 24)
      );
      return diasRestantes <= dias;
    });

    let mensaje = null;
    if (alerta.length > 0) {
      const licenciasExpirando = alerta.map((doc) => doc.licencia_N).join(", ");
      mensaje = `Hay ${alerta.length} licencias con fechas de vencimiento próximas. Licencias: ${licenciasExpirando}`;
    }

    res.status(200).json({ licencias, mensaje });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las licencias",
      error: error.message,
    });
  }
};

export const putLicencia = async (req, res) => {
  try {
    const {
      conductor_id,
      licencia_N,
      categoria,
      clase_de_vehiculo,
      servicio,
      fecha_expedicion,
      fecha_vencimiento,
    } = req.body;

    const persona = await Persona.findById(conductor_id);
    if (!persona) {
      return res.status(404).json({ message: "El id del persona no existe" });
    }

    const licencia = await Licencia.findByIdAndUpdate(
      req.params.id,
      {
        conductor_id,
        licencia_N,
        categoria,
        clase_de_vehiculo,
        servicio,
        fecha_expedicion,
        fecha_vencimiento,
      },
      { new: true, runValidators: true }
    );

    if (!licencia) {
      return res.status(404).json({ message: "Licencia no fue encontrada" });
    }

    res.status(200).json({
      message: "La licencia ha sido actualizada correctamente!",
      licencia,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar la licencia",
      error: error.message,
    });
  }
};

export const deleteLicencia = async (req, res) => {
  try {
    const licencia = await Licencia.findByIdAndDelete(req.params.id);
    if (!licencia) {
      return res.status(404).json({ message: "Licencia no encontrada" });
    }
    res.status(200).json({
      message: "La licencia ha sido eliminada correctamente!",
      licencia,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
