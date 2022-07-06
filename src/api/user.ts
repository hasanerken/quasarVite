import api from './axios';

export const userApi = {
  getPosts: () =>
    api()
      .get('/posts')
      .then((r) => r)
      .catch((e) => e.response),
};
