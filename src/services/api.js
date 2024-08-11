// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',  // Altere para o URL do seu backend
});

export default api;
