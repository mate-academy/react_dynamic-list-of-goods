import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    })
    .catch(error => {
      throw new Error('Failed to fetch goods data: ' + error.message);
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => goods)
    .then(goods => {
      const sortedGoods = [...goods].sort((a, b) =>
        a.name.localeCompare(b.name),
      );

      return sortedGoods;
    })
    .then(sortedGoods => sortedGoods.slice(0, 5))
    .catch(error => {
      throw new Error('Failed to fetch goods data: ' + error.message);
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods)
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(error => {
      throw new Error('Failed to fetch goods data: ' + error.message);
    });
};
