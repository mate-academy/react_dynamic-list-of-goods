import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      if (!response.headers.get('content-type')?.includes('application/json')) {
        throw new Error('Content type is not supported');
      }

      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => [...goods]
      .sort((good1, good2) => good1.name.localeCompare(good2.name))
      .slice(0, 5))
    .catch(() => {
      throw new Error('No goods loaded');
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(() => {
      throw new Error('No goods loaded');
    });
};
