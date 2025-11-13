// src/CustomerList.js
import { useState } from "react";
import API from "./utils/api.js";

const CustomerList = () => {
    const [error, setError] = useState("");

    const customerList = async (e) => {
        e.preventDefault();
        try {
            const response = await API.get("/api/customers/mostrarClientes");
            localStorage.setItem("token", response.data.token);
            alert("Clientes encontrados!");
        } catch (err) {
            setError(err.response?.data?.message || "No se han encontrado clientes!");
        }
    };

    return (
        <table>
            
            {error && <p>{error}</p>}
        </table>
    );
};

export default CustomerList;