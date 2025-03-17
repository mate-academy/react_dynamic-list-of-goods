import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }

    return response.json();
  });
}

export const get5First = () => {
  return getAll()
    .then(goods =>
      [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
    )
    .catch(() => {
      throw new Error('Failed to fetch 5 first goods');
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(() => {
      throw new Error('Failed to fetch red goods');
    });
};
