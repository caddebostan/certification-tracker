import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_PORT
    ? `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/api/${
        process.env.REACT_APP_API_VERSION
      }`
    : `${process.env.REACT_APP_API_HOST}/api/${process.env.REACT_APP_API_VERSION}`,
  headers: {
    Accept: 'application/json',
  },
});

export default api;
