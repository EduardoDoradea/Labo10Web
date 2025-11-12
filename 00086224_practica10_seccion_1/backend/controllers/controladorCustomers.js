
import { pool } from "../data/conexion.js";

const getCustomers = (request, response) => {
    pool.query("SELECT * FROM customers", (error, results) => {
        if (error) {
            console.error("Error al obtener el cliente:", error);
            response.status(500).json({ error: "Error interno del servidor" });
            return;
        }
        response.status(200).json(results.rows);
    });
};

const getCustomerById = (req, res) => {
    const { code } = req.query;
    pool.query("SELECT * FROM customers WHERE code = $1", [code], (error, results) => {
        if (error) {
            console.error("Error al obtener el cliente", error);
            res.status(500).json({ error: "Error interno del servidor" });
            return;
        }
        res.status(200).json(results.rows);
    });
};

export default { getCustomers, getCustomerById }