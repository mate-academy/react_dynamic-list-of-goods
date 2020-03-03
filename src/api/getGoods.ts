import { Good } from '../interfaces';

const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const getGoods = async (): Promise<Good[]> => {
  return getData(URL);
};
