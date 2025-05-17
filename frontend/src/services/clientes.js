import API from './api';

export const getClientes = () => API.get('/clientes');
export const createCliente = (cliente) => API.post('/clientes', cliente);
export const updateCliente = (id, cliente) => API.put(`/clientes/${id}`, cliente);
export const deleteCliente = (id) => API.delete(`/clientes/${id}`);
