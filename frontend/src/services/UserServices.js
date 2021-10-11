import axios from "axios";

const axiosConfig = {
  baseURL: process.env.REACT_APP_BASE_URL
};

export default class UserServices {
  static get = async (filter = {}) => {
    return axios.get('/users', {...axiosConfig, params: filter});
  };

  static show = async (id) => {
    return axios.get('/users/' + id, axiosConfig);
  };

  static create = async (payload) => {
    return axios.post('/users', payload, axiosConfig);
  };

  static update = async (id, payload) => {
    return axios.put('/users/' + id, payload, axiosConfig);
  };

  static delete = async (id) => {
    return axios.delete('/users/' + id, axiosConfig);
  };
}