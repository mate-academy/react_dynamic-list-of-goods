import { Good } from '../types/Good';

const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    // Перевіряємо, чи запит успішний
    if (!response.ok) {
      throw new Error('Failed to fetch goods');
    }
    return response.json();
  });
}

export const get5First = () => {
  return getAll().then(goods => {
    const sorted = [...goods].sort((a, b) =>
      a.name.toLowerCase().trim().localeCompare(b.name.toLowerCase().trim())
    );
    return sorted.slice(0, 5);
  });
};

export const getRedGoods = () => {
  return getAll().then(goods => {
    return goods.filter(good => good.color === 'red');
  });
};