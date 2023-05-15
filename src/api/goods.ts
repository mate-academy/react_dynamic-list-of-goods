import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then((response) => response.json());
}

export const get5First = () => {
  try {
    return getAll().then((goods) => (
      goods
        .sort(({ name: firstName }, { name: secondName }) => (
          firstName.localeCompare(secondName)
        ))
        .slice(0, 5)
    ));
  } catch (error) {
    throw new Error(`Error ${error}`);
  }
};

export const getRedGoods = () => {
  return getAll()
    .then((goods) => (
      goods.filter(({ color }) => color === 'red')
    ));
};
