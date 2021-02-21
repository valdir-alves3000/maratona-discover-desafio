import axios from 'axios';

const api = axios.create({
  baseURL: "https://projeto-integrador-backend.herokuapp.com"
});

export default api;
