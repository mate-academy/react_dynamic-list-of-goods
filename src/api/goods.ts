import { Good } from '../react-app-env';
// eslint-disable-next-line
const URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(URL)
    .then(response => response.json());
}

export const getTheFirstFive = () => {
  return getAll().then(goods => goods
    .sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5));
};

export const getReds = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
