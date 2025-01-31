import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json())
    .then((goods: Good[]) => goods);
}

export const get5First = () => {
  return getAll().then((goods: Good[]) =>
    goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  );
};

export const getRedGoods = () => {
  return getAll().then((goods: Good[]) =>
    goods.filter(good => good.color === 'red'),
  );
};
