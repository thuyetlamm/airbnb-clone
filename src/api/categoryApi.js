import axiosClient from './axiosClient';

const categoryApi = {
  getAll(params) {
    const url = '/getCategory';
    return axiosClient.get(url, { params });
  },
};

export default categoryApi;
