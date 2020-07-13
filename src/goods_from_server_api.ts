import { Good } from './types';

const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  return response.json();
}

export const getGoods = () => {
  return getData<Good[]>(API_URL);
};
