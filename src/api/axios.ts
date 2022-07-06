import { q } from 'app/dist/ssr/client/assets/format.cd3eaf2d';
import axios from 'axios';

export default function api() {
  const $q = useQuasar();

  const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/typicode/demo',
  });

  api.interceptors.response.use(
    (response) => {
      console.log('interceptor', response);
      // $q.notify('successfully fetched data');
      return response.data;
    },
    async (error) => {
      const response = error.response;
      console.log(response);
      let m = '';
      if (!process.env.DEV) {
        m = `| ${response.data.data}`;
      }
      $q.notify({
        message: `Failed to fetch data! | ${response.status} ${m}`,
        type: 'warning',
      });
      return Promise.reject(response);
    }
  );

  return api;
}
