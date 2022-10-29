import { Good } from '../types/Good';
import { request } from '../urils';

export function getAll(): Promise<Good[]> {
  return request();
}

export const get5First = () => {
  return getAll()
    .then(goods => goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter((good, index) => {
        if (index < 5) {
          return good;
        }

        return null;
      }));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods
      .filter(good => good.color === 'red'));
};
