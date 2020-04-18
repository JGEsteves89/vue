// File to set up a connector with the server
import axios from 'axios';

export default () => axios.create({
  baseUrl: 'http://loclhost:8081/',
});
