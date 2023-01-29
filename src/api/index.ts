import Config from 'react-native-config';
import axios from 'axios';
import {
  RegisterProps,
  LoginDto,
  UpdateProfileDto,
  UpdateServiceDto,
  CreateServiceDto,
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

export const deleteService = async (id: string) => {
  const res = await api.delete('api/services', {
    data: {
      servicesId: id,
    },
  });

  return res;
};

export const createService = async (body: CreateServiceDto) => {
  const formData = new FormData();
  // for (let key in body) {
  //   if (key !== 'image') {
  //     //@ts-ignore
  //     formData.append(key, body[key]);
  //   }
  // }
  const objkeys = Object.keys(body);

  objkeys.forEach(key => {
    //@ts-ignore
    formData.append(key, body[key]);
  });

  // for (let i = 0; i < body.image.length; i++) {
  //   formData.append('image', body.image[i]);
  // }

  const res = await api.post('api/services', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};
