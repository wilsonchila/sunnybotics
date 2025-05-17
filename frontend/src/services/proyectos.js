import API from './api';

export const getProyectos = () => API.get('/proyectos');
export const createProyecto = (proyecto) => API.post('/proyectos', proyecto);
export const updateProyecto = (id, proyecto) => API.put(`/proyectos/${id}`, proyecto);
export const deleteProyecto = (id) => API.delete(`/proyectos/${id}`);
