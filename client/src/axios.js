import axios from 'axios';
import constants from './constants';

let token = window.localStorage.getItem('token');

if(token){
  axios.defaults.headers.common['Authorization'] = `Token ${token}`;
}

const http = {
  get: (url, params) => {
    return axios.get(constants.api_url +  url, params);
  },

  post: (url, data) => {
    return axios.post(constants.api_url +  url, data);
  },

  put: (url, data) => {
    return axios.put(constants.api_url +  url, data);
  },

  delete: (url) => {
    return axios.delete(constants.api_url +  url);
  }
};


export default http;