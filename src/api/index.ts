import Config from 'react-native-config';
import axios from 'axios';
import {
  RegisterProps,
  LoginDto,
  UpdateProfileDto,
  UpdateServiceDto,
} from '../dto';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
  baseURL: Config.API_BASE_URL,
});

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@token');
    if (token) {
      config.headers.Authorization = token;
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

export const getProfile = async () => {
  const res = await api.get('api/user/profile');
  return res.data;
};

export const updateProfile = async (body: UpdateProfileDto) => {
  const res = await api.patch('api/user/profile', body);
  return res;
};

export const getServices = async () => {
  const res = await api.get('api/services/');
  return res.data;
};

export const updateService = async (
  id: string | number,
  body: UpdateServiceDto,
) => {
  const res = await api.patch(`api/services/`, {
    ...body,
    servicesId: id,
  });

  return res;
};
