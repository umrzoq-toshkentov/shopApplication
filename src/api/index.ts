import Config from 'react-native-config';
import axios from 'axios';
import {RegisterProps} from '../dto';

export const api = axios.create({
  baseURL: Config.API_BASE_URL,
});

export const register = async (body: RegisterProps) => {
  await api.post(`api/user/register`, {...body});
};
