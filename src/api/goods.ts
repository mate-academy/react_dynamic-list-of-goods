import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status:  ${response.status}`);
    }

    return response.json();
  });
}

export const get5First = () => {
  return getAll().then(goods => {
    goods.sort((a, b) => a.name.localeCompare(b.name));

    if (goods.length < 5) {
      throw new Error('Масив меньше 5');
    }

    return goods.slice(0, 5);
  });
};

export const getRedGoods = () => {
  return getAll().then(goods => {
    const filtered = goods.filter(good => good.color === 'red');

    if (filtered.length === 0) {
      throw new Error('Немає червоних');
    }

    return filtered;
  });
};
