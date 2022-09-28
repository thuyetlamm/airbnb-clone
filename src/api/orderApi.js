import { router } from '~/routes';
import axiosClient from './axiosClient';
const qs = require('qs');

const orderApi = {
  getAll(params) {
    const url = `/orders`;
    return axiosClient.get(url, params);
  },
  get(id) {
    const url = `${router.room}/${id}`;
    return axiosClient.get(url);
  },
  post(data) {
    const url = '/orders/';
    return axiosClient.post(url, data);
  },
};

export default orderApi;
