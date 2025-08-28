import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://michelam-pseudo.github.io/react_dynamic-list-of-goods/api/goods.json`;

export const getAll = (): Promise<Good[]> => {
  return fetch(API_URL).then(response => response.json());
};

export const get5First = (): Promise<Good[]> => {
  return getAll().then((goods: Good[]) => {
    goods.sort((good1: Good, good2: Good) => {
      return good1.name.localeCompare(good2.name);
    });

    return goods.slice(0, 5);
  });
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
