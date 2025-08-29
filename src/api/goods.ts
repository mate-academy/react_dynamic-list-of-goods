import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return 'A API está inacessível via protocolo HTTP.';
    })
    .catch(error => error);
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then((goods: Good[]): Good[] => {
      const goodsWrapper = [...goods];

      goodsWrapper.sort((good1: Good, good2: Good) => {
        return good1.name.localeCompare(good2.name);
      });

      return goodsWrapper.slice(0, 5);
    })
    .catch(error => error);
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then((goods: Good[]): Good[] => {
      return goods.filter((good: Good) => {
        return good.color === 'red';
      });
    })
    .catch(error => error);
};
