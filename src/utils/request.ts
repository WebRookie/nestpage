import { extend } from 'umi-request';
const BASE_URL = 'http://localhost:3000/api';

export const request = extend({
  prefix: BASE_URL,
  timeout: 6 * 1000,
});
