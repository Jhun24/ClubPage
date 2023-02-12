import axios from 'axios';

import { Poster } from '~/type';
import { BASE_SERVER_URL } from '~/const';

const getPostList = (page: number) => {
  const res = axios.get(`${BASE_SERVER_URL}/post/list?page=${page}`);
  return res;
};

const getPost = (index: number) => {
  const res = axios.get(`${BASE_SERVER_URL}/post?index=${index}`);
  return res;
};

const getPoster = () => {
  const res = axios.get(`${BASE_SERVER_URL}/poster`);
  return res;
};

export { getPost, getPoster, getPostList };
