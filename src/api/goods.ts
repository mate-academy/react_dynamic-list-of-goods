import { Good } from '../react-app-env';
// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods.sort((good1, good2) => (
      good1.name.localeCompare(good2.name))))
    .then(goods => goods.slice(0, 5));
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'));
};
