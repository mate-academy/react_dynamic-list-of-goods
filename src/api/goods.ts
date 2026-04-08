import { Good } from '../types/Good';
import { filterGoods, sortGoods } from '../utils';
import { fetchData } from '../service/http';

const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  return fetchData(API_URL, 500);
};

export const get5First = async () => {
  return getAll().then(goods => sortGoods(goods, 'name').slice(0, 5));
};

export const getRedGoods = async () => {
  return getAll().then(goods => filterGoods(goods, 'color', 'red'));
};
