import { Good } from '../types/Good';

const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    // Якщо статус відповіді не 200-299, викидаємо помилку
    if (!response.ok) {
      throw new Error('Failed to fetch goods');
    }

    return response.json();
  });
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods => {
    return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  });
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => {
    return goods.filter(good => good.color === 'red');
  });
};
