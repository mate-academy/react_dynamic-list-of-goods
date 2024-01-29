import { Good } from '../types/Good';
import { getData } from '../utils/httpClient';

// eslint-disable-next-line

export function getAll(): Promise<Good[]> {
  return getData('/goods.json');
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => {
      return goods.sort((good1, good2) => {
        return good1.name.localeCompare(good2.name);
      });
    })
    .then(sortedGoods => sortedGoods.slice(0, 5));
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'));
};
