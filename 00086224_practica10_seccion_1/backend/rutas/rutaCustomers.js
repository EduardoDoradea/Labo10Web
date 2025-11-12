
import controlador from '../controllers/controladorCustomers.js';
import { Router } from "express";
import { verifyToken } from '../middleware/token.js';

const router = Router();

router.get("/mostrarClientes", verifyToken, controlador.getCustomers);
router.get("/buscar", verifyToken, controlador.getCustomerById);
//Ruta: GET /api/customers/search?code=XYZ

export default router;


