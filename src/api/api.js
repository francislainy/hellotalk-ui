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
    return api.post('moments/', {content});
};

export const getMoments = () => {
    return api.get('moments/');
};

export const getMoment = (id) => {
    return api.get(`moments/${id}/`);
};

export const deleteMoment = (id) => {
    return api.delete(`moments/${id}/`);
};

export const updateMoment = (id, content) => {
    return api.put(`moments/${id}/`, {content});
};

export const getCommentsForMoment = (id) => {
    return api.get(`moments/${id}/comments/`);
};

export const createComment = (momentId, content) => {
    return api.post(`moments/${momentId}/comments`, {content});
};

export const updateComment = (momentId, commentId, content) => {
    return api.put(`moments/${momentId}/comments/${commentId}`, {content});
};

export const deleteComment = (momentId, commentId) => {
    return api.delete(`moments/${momentId}/comments/${commentId}`);
};
