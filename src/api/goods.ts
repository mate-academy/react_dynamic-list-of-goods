import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function sortByNames(goods: Good[]) {
  return goods.sort((g1: Good, g2: Good) => g1.name.localeCompare(g2.name));
}

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => sortByNames(goods).slice(0, 5));
};

export const getRed = () => {
  return getAll()
    .then((goods) => goods.filter(good => good.color === 'red'));
};
