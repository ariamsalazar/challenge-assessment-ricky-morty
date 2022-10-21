import axios from 'axios';
import { toSnakeCase } from '../utils/global';

const Api = {
  async get(endpoint: string, params: any = null): Promise<any> {
    if (params) {
      params = new URLSearchParams(toSnakeCase(params));
    }
    const response = await axios.get(endpoint, { params });
    return response.data;
  },
};

export default Api;