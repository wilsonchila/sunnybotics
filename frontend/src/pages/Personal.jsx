import React, { useState, useEffect } from 'react';
import { getPersonal, createPersonal, deletePersonal } from '../services/personal';
import { getCuadrillas } from '../services/cuadrillas';

function Personal() {
  const [personal, setPersonal] = useState([]);
  const [cuadrillas, setCuadrillas] = useState([]);

  const [form, setForm] = useState({
    nombre: '',
    cedula: '',
    rol: 'tecnico',
    cuadrillaId: ''
  });

  useEffect(() => {
    fetchPersonal();
    fetchCuadrillas();
  }, []);

  const fetchPersonal = async () => {
    const res = await getPersonal();
    setPersonal(res.data);
  };

  const fetchCuadrillas = async () => {
    const res = await getCuadrillas();
    setCuadrillas(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPersonal(form);
    fetchPersonal();
    setForm({ nombre: '', cedula: '', rol: 'tecnico', cuadrillaId: '' });
  };

  const handleDelete = async (id) => {
    await deletePersonal(id);
    fetchPersonal();
  };

  return (
    <div className="container mt-4">
      <h2>Personal</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Nombre completo"
          className="form-control mb-2"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Número de cédula"
          className="form-control mb-2"
          value={form.cedula}
          onChange={(e) => setForm({ ...form, cedula: e.target.value })}
          required
        />
        <select
          className="form-select mb-2"
          value={form.rol}
          onChange={(e) => setForm({ ...form, rol: e.target.value })}
        >
          <option value="admin">Administrador</option>
          <option value="tecnico">Técnico</option>
          <option value="supervisor">Supervisor</option>
        </select>
        <select
          className="form-select mb-2"
          value={form.cuadrillaId}
          onChange={(e) => setForm({ ...form, cuadrillaId: e.target.value })}
        >
          <option value="">Selecciona una cuadrilla</option>
          {cuadrillas.map((c) => (
            <option key={c._id} value={c._id}>
              {c.nombre}
            </option>
          ))}
        </select>
        <button className="btn btn-primary">Guardar</button>
      </form>

      <ul className="list-group">
        {personal.map((p) => (
          <li key={p._id} className="list-group-item d-flex justify-content-between">
            <div>
              <strong>{p.nombre}</strong> - Cédula: {p.cedula} - Rol: {p.rol}
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Personal;
