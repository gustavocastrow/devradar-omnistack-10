import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.41:9999',
})

export default api;