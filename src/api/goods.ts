import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then((response) => response.json());
}

function sortGoods(goods: Good[]) {
  return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
}

export const get5First = () => {
  return getAll().then((goods) => sortGoods(goods));
};

export const getRedGoods = () => {
  return getAll().then((goods) => goods.filter(({ color }) => color === 'red'));
};
