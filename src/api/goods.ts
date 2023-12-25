import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  const sortFunction = (itemA: Good, itemB: Good) => (
    itemA.name.localeCompare(itemB.name)
  );

  return getAll()
    .then(goods => [...goods].sort(sortFunction).slice(0, 5));
};

export const getRedGoods = () => {
  const COLOR = 'red';

  return getAll()
    .then(goods => goods.filter(item => item.color === COLOR));
};
