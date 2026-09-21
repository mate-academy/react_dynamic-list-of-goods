import { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return response.json();
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Failed to load goods:', error);

      throw error;
    });
}

export function get5First(): Promise<Good[]> {
  return getAll().then(goods => {
    return [...goods]
      .sort((good1, good2) => good1.name.localeCompare(good2.name))
      .slice(0, 5);
  });
}

export function getRed(): Promise<Good[]> {
  return getAll().then(goods => {
    return goods.filter(good => good.color === 'red');
  });
}
