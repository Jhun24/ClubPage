import axios from 'axios';

import { BASE_SERVER_URL } from '~/const';

const getRecuritment = () => {
  const res = axios.get(`${BASE_SERVER_URL}/recuritment`);
  return res;
};

const getWorkingStatus = () => {
  const res = axios.get(`${BASE_SERVER_URL}/working`);
  return res;
};

export { getRecuritment, getWorkingStatus };
