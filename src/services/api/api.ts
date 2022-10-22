import axios from 'axios';
import { errorInterceptor, responseInterceptor } from '../interceptors';

export const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

api.interceptors.response.use(
  response => responseInterceptor(response),
  error => errorInterceptor(error)
);
