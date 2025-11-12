// app.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import rutaUser from "./rutas/rutaUsers.js"
import rutaAut from "./rutas/rutaAutenticacion.js"
import rutaCustomer from "./rutas/rutaCustomers.js"
import rutaSale from "./rutas/rutaSales.js"

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', rutaAut);
app.use('/api/users', rutaUser);
app.use('/api/customers', rutaCustomer);
app.use('/api/sales', rutaSale);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`)
);

