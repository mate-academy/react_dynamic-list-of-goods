import { Good } from '../types/Good';

const API_URL
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getAll = (): Promise<Good[]> => fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  });

export const get5First = () => {
  return getAll()
    .then(goods => (
      [...goods]
        .sort((previous, current) => (
          previous.name.localeCompare(current.name)
        ))
        .slice(0, 5)));
};

export const getRed = () => {
  return getAll()
    .then(goods => goods.filter(({ color }) => color === 'red'));
};
