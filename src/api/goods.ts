import { Good } from '../react-app-env';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = (n:number): Promise<Good[]> => {
  return getAll()
    .then(result => result.slice(0, n));
};

export const getRedGoods = (color: string): Promise<Good[]> => {
  return getAll()
    .then(result => result.filter((good:Good) => good.color === color));
};
