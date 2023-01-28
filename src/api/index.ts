import Config from 'react-native-config';
import axios from 'axios';
import {RegisterProps, LoginDto} from '../dto';

export const api = axios.create({
  baseURL: Config.API_BASE_URL,
});

export const register = async (body: RegisterProps) => {
  await api.post(`api/user/register`, {...body});
};

export const login = async (body: LoginDto) => {
  const res = await api.post('api/user/login', {...body});

  console.log(res.data, 'data');
  return res;
};
