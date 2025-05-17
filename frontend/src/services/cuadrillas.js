import API from './api';

export const getCuadrillas = () => API.get('/cuadrillas');
export const createCuadrilla = (cuadrilla) => API.post('/cuadrillas', cuadrilla);
export const updateCuadrilla = (id, cuadrilla) => API.put(`/cuadrillas/${id}`, cuadrilla);
export const deleteCuadrilla = (id) => API.delete(`/cuadrillas/${id}`);
