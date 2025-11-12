
import { pool } from "../data/conexion.js";

const getSales = (req, res) => {
    pool.query("SELECT * FROM sales", (error, results) => {
        if (error) {
            console.error("Error al obtener las ventas:", error);
            res.status(500).json({ error: "Error interno del servidor" });
            return;
        }
        res.status(200).json(results.rows);
    });
};

const postSales = (req, res) => {
    const { amount, id_customer } = req.body;

    pool.query('SELECT id FROM customers WHERE id = $1', [id_customer], (error, results) => {
        if (error) {
            console.error("No se logro encontrar a ese cliente.", error);
            res.status(500).json({ error: "Error interno del servidor" });
            return;
        }
        if (results.rowCount === 0) {
            return res.status(404).json({ error: `El cliente con id ${id_customer} no existe.` });
        }
        console.log("Se ha encontrado al cliente. " + results.rows);
        pool.query('INSERT INTO sales (amount, created_at, id_customer) VALUES ($1, NOW(), $2)',
            [amount, id_customer], (error, results) => {
                if (error) {
                    console.error("Error insertar la venta.", error);
                    res.status(500).json({ error: "Error interno del servidor" });
                    return;
                }
                res.status(200).json("Se ha creado la venta con exito. " + results.rows);
            });
    })
}

const getSalesCustomer = (req, res) => {
    pool.query(`SELECT s.id, s.amount, s.created_at, c.name
                FROM sales s
                JOIN customers c ON s.id_customer = c.id`, (error, results) => {
        if (error) {
            console.error("Error al obtener las ventas:", error);
            res.status(500).json({ error: "Error interno del servidor" });
            return;
        }
        res.status(200).json(results.rows);
    });
};

const getReport = (req, res) => {
    pool.query(`SELECT c.name, SUM(s.amount) AS total_sales
                FROM sales s
                JOIN customers c ON s.id_customer = c.id
                GROUP BY c.name`, (error, results) => {
        if (error) {
            console.error("Error al obtener las ventas:", error);
            res.status(500).json({ error: "Error interno del servidor" });
            return;
        }
        res.status(200).json(results.rows);
    });
};

export default { getSales, postSales, getSalesCustomer, getReport }