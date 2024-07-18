import { Router } from "express";
import {
  createVehiculo,
  getAllVehiculos,
  getVehiculoById,
  updateVehiculo,
  deleteVehiculo,
} from "../controllers/vehiculos.controller.js";
import { TokenValidation } from "../authentication/tokens/verifyToken";

const router = Router();

router.post("/create", TokenValidation, createVehiculo);
router.get("/", TokenValidation, getAllVehiculos);
router.get("/:id", TokenValidation, getVehiculoById);
router.patch("/update/:id", TokenValidation, updateVehiculo);
router.delete("/delete/:id", TokenValidation, deleteVehiculo);

export default router;
