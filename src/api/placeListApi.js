import axiosClient from './axiosClient';
const qs = require('qs');

const placeListApi = {
  getAll(params) {
    const query = qs.stringify(params, {
      encodeValuesOnly: true,
    });
    const url = `/placelists/?${query}`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/placelists/${id}`;
    return axiosClient.get(url);
  },
};

export default placeListApi;
