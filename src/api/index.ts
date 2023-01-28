import Config from 'react-native-config';
import axios from 'axios';
import {RegisterProps, LoginDto} from '../dto';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
  baseURL: Config.API_BASE_URL,
});

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@token');
    console.log(token, 'token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const register = async (body: RegisterProps) => {
  await api.post(`api/user/register`, {...body});
};

export const login = async (body: LoginDto) => {
  const res = await api.post('api/user/login', {...body});
  return res;
};
