import { router } from '~/routes';
import axiosClient from './axiosClient';
const qs = require('qs');

const placeListApi = {
  getAll(params) {
    const query = qs.stringify(params, {
      encodeValuesOnly: true,
    });
    const url = `${router.placelist}/?${query}`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `${router.placelist}/${id}`;
    return axiosClient.get(url);
  },
};

export default placeListApi;
