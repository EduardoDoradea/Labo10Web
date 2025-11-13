
import { pool } from "../data/conexion.js";

const getCustomers = (req, res) => {
    pool.query("SELECT * FROM customers", (error, results) => {
        if (error) {
            console.error("Error al obtener el cliente:", error);
            res.status(500).json({ error: "Error interno del servidor" });
            return;
        }
        res.status(200).json(results.rows);
    });
};

const getCustomerByCode = (req, res) => {
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

export default { getCustomers, getCustomerByCode }