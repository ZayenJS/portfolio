import baseAxios from 'axios';

const axios = baseAxios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
});

export default axios;
