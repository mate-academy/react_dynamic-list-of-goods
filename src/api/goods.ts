import { first5Goods, onlyRedGoods } from '../helpers';
import { Good, LoadError } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export function getAll(): Promise<Good[]> {
  return wait(2000)
    .then(() => fetch(API_URL))
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      if (!response.headers.get('content-type')?.includes(
        'application/json',
      )) {
        throw new Error(LoadError.ContentTypeError);
      }

      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => first5Goods([...goods]));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => onlyRedGoods(goods));
};
