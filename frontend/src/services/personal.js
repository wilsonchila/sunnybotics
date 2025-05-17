import API from './api';

export const getPersonal = () => API.get('/personal');
export const createPersonal = (personal) => API.post('/personal', personal);
export const updatePersonal = (id, personal) => API.put(`/personal/${id}`, personal);
export const deletePersonal = (id) => API.delete(`/personal/${id}`);
