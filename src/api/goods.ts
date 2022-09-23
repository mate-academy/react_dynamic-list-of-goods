import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => (
      goods
        .sort((previusGood, currentGood) => (
          previusGood.name.localeCompare(currentGood.name)
        ))
        .slice(0, 5)
    ));
};

export const getRed = () => {
  return getAll()
    .then(goods => (
      goods.filter(({ color }) => color === 'red')
    ));
};
