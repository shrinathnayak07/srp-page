import axios from 'axios';
import { API_URL } from '../constants';

export const getAllProducts = () => {
  return axios.get(API_URL).then(res => res).catch(err => err);
}