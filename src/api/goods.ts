import { Good } from '../types/Good';
import { request } from '../urils';

export function getAll(): Promise<Good[]> {
  return request();
}

export const get5First = () => {
  return getAll()
    .then(goods => goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods
      .filter(good => good.color === 'red'));
};
