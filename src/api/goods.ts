import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Failed to fetch goods');
    })
    .then((goods: Good[]) => goods);
}

export const get5First = () => {
  return getAll()
    .catch(error => {
      // eslint-disable-next-line
      console.error('Failed to fetch goods:', error);

      return [];
    })
    .then(goods =>
      goods
        .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
        .slice(0, 5),
    ); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .catch(error => {
      // eslint-disable-next-line
      console.error('Failed to fetch goods:', error);

      return [];
    })
    .then(goods => goods.filter(good => good.color === 'red')); // get only red
};
