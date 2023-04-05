import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function wait(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export function getAll(): Promise<Good[]> {
  return wait(300)
    .then(() => fetch(API_URL))
    .then(response => {
      if (!response.ok) {
        throw new Error('An error occurred while loading the goods');
      }

      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      goods.sort((good1, good2) => good1.name.localeCompare(good2.name));

      return goods.slice(0, 5);
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(({ color }) => color === 'red'));
};
