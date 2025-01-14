import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8088/store/v1/api/products',  // Esto es lo que configura la URL base
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
