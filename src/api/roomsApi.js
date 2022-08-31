import axiosClient from './axiosClient';
const qs = require('qs');

const placeListApi = {
  getAll(params) {
    const query = qs.stringify(params, {
      encodeValuesOnly: true,
    });
    const url = `/rooms/?${query}`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/rooms/${id}`;
    return axiosClient.get(url);
  },
};

export default placeListApi;
