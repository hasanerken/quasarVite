import axios from 'axios';

export default function api() {
  const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/typicode/demo',
  });

  api.interceptors.response.use(
    (response) => {
      console.log('interceptor', response);
      return response.data;
    },
    async (error) => {
      console.log('interceptor error', error);
      const response = error.response;
      return Promise.reject(response);
    }
  );

  return api;
}
