
import controlador from '../controllers/controladorSales.js';
import { Router } from "express";
import { verifyToken } from '../middleware/token.js';

const router = Router();

router.get("/mostrarVentas", verifyToken, controlador.getSales);
router.post("/registrarVenta", verifyToken, controlador.postSales);
router.get("/mostrarVentasCliente", verifyToken, controlador.getSalesCustomer);
router.get("/reporte", verifyToken, controlador.getReport);

export default router;
