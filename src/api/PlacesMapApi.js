import axiosClient from './axiosClient';

const PlacesMapApi = {
  getAll(params) {
    const url = '/statistics';
    return axiosClient.get(url, { params });
  },
};
export default PlacesMapApi;
