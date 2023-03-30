import axios from 'axios';
import config from '../config/apiConfig';

/**
 *  /contries - array of contries
 *  /cities - array of cities
 *  /prices/cheap - array of prices
 */
class Api {
  constructor(config) {
    this.url = config.url;
  }

  async countries() {
    // try {
    //   const response = await axios.get(`${this.url}/countries`);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    //   return Promise.reject(error);
    // }
  }
  async cities() {
    try {
      const response = await axios.get(`${this.url}/v1/city-directions?origin=BKK&limit=2`);
      console.log(response);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
  async prices(params) {}
}

const api = new Api(config);

export default api;