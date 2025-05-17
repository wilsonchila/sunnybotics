import React, { useEffect, useState } from 'react';
import { getCuadrillas, createCuadrilla, deleteCuadrilla } from '../services/cuadrillas';
import { getProyectos } from '../services/proyectos';
import { getPersonal } from '../services/personal';

function Cuadrillas() {
  const [cuadrillas, setCuadrillas] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [personal, setPersonal] = useState([]);

  const [form, setForm] = useState({
    nombre: '',
    proyectoAsignado: '',
    personalAsignado: []
  });

  useEffect(() => {
    fetchCuadrillas();
    fetchProyectos();
    fetchPersonal();
  }, []);

  const fetchCuadrillas = async () => {
    const res = await getCuadrillas();
    setCuadrillas(res.data);
  };

  const fetchProyectos = async () => {
    const res = await getProyectos();
    setProyectos(res.data);
  };

  const fetchPersonal = async () => {
    const res = await getPersonal();
    setPersonal(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCuadrilla(form);
    fetchCuadrillas();
    setForm({ nombre: '', proyectoAsignado: '', personalAsignado: [] });
  };

  const handleDelete = async (id) => {
    await deleteCuadrilla(id);
    fetchCuadrillas();
  };

  const handlePersonalChange = (e) => {
    const options = e.target.options;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) selected.push(options[i].value);
    }
    setForm({ ...form, personalAsignado: selected });
  };

  return (
    <div className="container mt-4">
      <h2>Cuadrillas</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Nombre de la cuadrilla"
          className="form-control mb-2"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          required
        />

        <select
          className="form-select mb-2"
          value={form.proyectoAsignado}
          onChange={(e) => setForm({ ...form, proyectoAsignado: e.target.value })}
        >
          <option value="">Selecciona un proyecto</option>
          {proyectos.map((p) => (
            <option key={p._id} value={p._id}>{p.nombre}</option>
          ))}
        </select>

        <select
          multiple
          className="form-select mb-2"
          value={form.personalAsignado}
          onChange={handlePersonalChange}
        >
          {personal.map((p) => (
            <option key={p._id} value={p._id}>
              {p.nombre} ({p.rol})
            </option>
          ))}
        </select>

        <button className="btn btn-primary">Guardar</button>
      </form>

      <ul className="list-group">
        {cuadrillas.map((c) => (
          <li key={c._id} className="list-group-item d-flex justify-content-between">
            <div>
              <strong>{c.nombre}</strong> - Proyecto: {c.proyectoAsignado?.nombre || 'N/A'} - Personal: {c.personalAsignado.length}
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(c._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cuadrillas;
