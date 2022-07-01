import api from './axios';

export const userApi = {
  getPosts: () => api().get('/posts'),
};
