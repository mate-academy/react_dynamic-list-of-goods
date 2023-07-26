import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json1`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then((response) => response.json())
    .catch(error => {
      throw new Error(`Помилка в отриманих даних: ${error.message}`);
    });
}

export const get5First = () => {
  return getAll().then((goods) => {
    return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  });
};

export const getRedGoods = () => {
  return getAll().then((goods) => {
    return goods.filter((good) => good.color === 'red');
  });
};
