import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hellotalk-production.up.railway.app/api/v1/ht/',
    headers: {
        'Accept': 'application/json, application/javascript, text/javascript, text/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic dXNlcm5hbWVjOnBhc3N3b3JkYw=='
    }
});

export const getUsers = () => {
    return api.get(`users/`);
};

export const getUser = (id) => {
    return api.get(`users/${id}/`);
};

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

export const likeMoment = (momentId) => {
    return api.put(`moments/${momentId}/like/`);
};
export const unlikeMoment = (momentId) => {
    return api.delete(`moments/${momentId}/unlike/`);
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

export const createFollowship = (followship) => {
    return api.post('followship/', followship);
};

export const getFollowshipFromUser = (userId) => {
    return api.get(`followship/from/user/${userId}`, userId);
};

export const deleteFollowship = (followshipId) => {
    return api.delete(`followship/${followshipId}`);
};

export const getChats = (id) => {
    return api.get(`messages/chats/`);
};

export const getChat = (id) => {
    return api.get(`messages/chats/${id}/`);
};

export const createMessage = (message) => {
    return api.post('messages/', message);
};

export const updateMessage = (messageId, content) => {
    return api.put(`messages/${messageId}`, {content});
};

export const deleteMessage = (messageId) => {
    return api.delete(`messages/${messageId}`);
};
