import { api } from './api';

export const getAll = async () => {
  const response = await api.get('/coffees');
  return response;
};
