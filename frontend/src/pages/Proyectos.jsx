import React, { useState, useEffect } from 'react';
import { getProyectos, createProyecto, deleteProyecto } from '../services/proyectos';
import { getClientes } from '../services/clientes';

function Proyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    clienteId: '',
    fechaInicio: '',
    estado: 'Pendiente'
  });

  useEffect(() => {
    fetchProyectos();
    fetchClientes();
  }, []);

  const fetchProyectos = async () => {
    const res = await getProyectos();
    setProyectos(res.data);
  };

  const fetchClientes = async () => {
    const res = await getClientes();
    setClientes(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProyecto(form);
    fetchProyectos();
    setForm({ nombre: '', clienteId: '', fechaInicio: '', estado: 'Pendiente' });
  };

  const handleDelete = async (id) => {
    await deleteProyecto(id);
    fetchProyectos();
  };

  return (
    <div className="container mt-4">
      <h2>Proyectos</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Nombre del proyecto"
          className="form-control mb-2"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          required
        />

        <select
          className="form-select mb-2"
          value={form.clienteId}
          onChange={(e) => setForm({ ...form, clienteId: e.target.value })}
          required
        >
          <option value="">Selecciona un cliente</option>
          {clientes.map((c) => (
            <option key={c._id} value={c._id}>
              {c.nombre}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="form-control mb-2"
          value={form.fechaInicio}
          onChange={(e) => setForm({ ...form, fechaInicio: e.target.value })}
          required
        />

        <select
          className="form-select mb-2"
          value={form.estado}
          onChange={(e) => setForm({ ...form, estado: e.target.value })}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="En progreso">En progreso</option>
          <option value="Finalizado">Finalizado</option>
        </select>

        <button className="btn btn-primary">Guardar</button>
      </form>

      <ul className="list-group">
        {proyectos.map((p) => (
          <li key={p._id} className="list-group-item d-flex justify-content-between">
            <div>
              <strong>{p.nombre}</strong> - Cliente: {p.clienteId?.nombre || 'N/A'} - Estado: {p.estado}
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Proyectos;
