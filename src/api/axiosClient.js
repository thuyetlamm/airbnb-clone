import axios from 'axios';
const axiosClient = axios.create({
  baseURL: 'https://airbnb19.p.rapidapi.com/api/v1',
  headers: {
    'X-RapidAPI-Key': '40efa66a56msh623f111d386deafp1bcb18jsn7a80fa84b7b6',
    'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default axiosClient;
