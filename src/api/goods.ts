import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then((resp) => {
    if (!resp.ok) {
      throw new Error('Error');
    }

    return resp.json();
  });
}

export const get5First = () => {
  return getAll().then((answ) => {
    return answ.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  });
};

export const getRedGoods = () => {
  return getAll().then((answ) => answ.filter((good) => good.color === 'red'));
};
