import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.100.22:3000' //gerardo PC
});

export default instance;