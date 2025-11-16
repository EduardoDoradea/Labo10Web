// src/ app.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componentes/Login.jsx";
import Protected from "./componentes/Protected.jsx";
import ListClientes from "./componentes/listaClientes.jsx";
import RegVentas from "./componentes/registroVenta.jsx";
import ListVentasClientes from "./componentes/listaVentasCliente.jsx";
import ReportVentas from "./componentes/reporteVentas.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/protected" element={<Protected />} />
      <Route path="/clientes" element={<ListClientes />} />
      <Route path="/registroVentas" element={<RegVentas />} />
      <Route path="/listaVentasClientes" element={<ListVentasClientes />} />
      <Route path="/reporteVentas" element={<ReportVentas />} />
    </Routes>
  </Router>
);

export default App;