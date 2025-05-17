import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Clientes from '../pages/Clientes';
import Proyectos from '../pages/Proyectos';
import Cuadrillas from '../pages/Cuadrillas';
import Personal from '../pages/Personal';

const AppRoutes = () => {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
      <Route path="/clientes" element={isAuthenticated ? <Clientes /> : <Navigate to="/" />} />
      <Route path="/proyectos" element={isAuthenticated ? <Proyectos /> : <Navigate to="/" />} />
      <Route path="/cuadrillas" element={isAuthenticated ? <Cuadrillas /> : <Navigate to="/" />} />
      <Route path="/personal" element={isAuthenticated ? <Personal /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
