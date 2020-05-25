import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.110:4565',
});

export default api;
