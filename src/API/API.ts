import { Good } from '../types';

export const getGoods = (): Promise<Good[]> => {
  return fetch('/goods.json')
    .then(response => response.json());
};
