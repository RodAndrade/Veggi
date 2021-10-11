import axios from "axios";

const axiosConfig = {
  baseURL: process.env.REACT_APP_BASE_URL
};

export default class TaskServices {
  static get = async (params) => {
    return axios.get('/tasks', {...axiosConfig, params: {
      user: params?.user || ''
    }});
  };

  static create = async (payload) => {
    return axios.post('/tasks', payload, axiosConfig);
  };

  static update = async (id, payload) => {
    return axios.put('/tasks/' + id, payload, axiosConfig);
  };

  static delete = async (id) => {
    return axios.delete('/tasks/' + id, axiosConfig);
  };
}