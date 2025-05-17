import React, { useEffect, useState } from 'react';
import { getClientes, createCliente, deleteCliente } from '../services/clientes';

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [form, setForm] = useState({ nombre: '', contacto: '', email: '', direccion: '' });

  const fetchClientes = async () => {
    const res = await getClientes();
    setClientes(res.data);
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCliente(form);
    fetchClientes();
    setForm({ nombre: '', contacto: '', email: '', direccion: '' });
  };

  const handleDelete = async (id) => {
    await deleteCliente(id);
    fetchClientes();
  };

  return (
    <div className="container mt-4">
      <h2>Clientes</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input type="text" placeholder="Nombre" className="form-control mb-2"
          value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
        <input type="text" placeholder="Contacto" className="form-control mb-2"
          value={form.contacto} onChange={(e) => setForm({ ...form, contacto: e.target.value })} />
        <input type="email" placeholder="Email" className="form-control mb-2"
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="text" placeholder="Dirección" className="form-control mb-2"
          value={form.direccion} onChange={(e) => setForm({ ...form, direccion: e.target.value })} />

        <button className="btn btn-primary">Guardar</button>
      </form>

      <ul className="list-group">
        {clientes.map((c) => (
          <li key={c._id} className="list-group-item d-flex justify-content-between">
            {c.nombre} - {c.contacto}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(c._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clientes;
