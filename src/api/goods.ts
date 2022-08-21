import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      return [...goods].sort((good1: Good, good2: Good): number => {
        return good1.name.localeCompare(good2.name);
      });
    })
    .then(sortedGoods => {
      return sortedGoods.filter((_el, index) => index < 5);
    });
};

export const getRed = () => {
  return getAll()
    .then(goods => {
      return goods.filter(good => good.color === 'red');
    });
};
