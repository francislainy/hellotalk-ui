import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8081/api/v1/ht/',
    headers: {
        'Accept': 'application/json, application/javascript, text/javascript, text/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic dXNlcm5hbWVjOnBhc3N3b3JkYw=='
    }
});

export const createMoment = (content) => {
    return api.post('moments/', { content });
};

export const getMoments = () => {
    return api.get('moments/');
};

export const getMoment = (id) => {
    return api.get(`moments/${id}/`);
};

export const getCommentsForMoment = (id) => {
    return api.get(`moments/${id}/comments/`);
};

export const deleteMoment = (id) => {
    return api.delete(`moments/${id}/`);
};