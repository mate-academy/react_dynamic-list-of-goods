import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch goods, status: ${response.status}`);
      }

      return response.json();
    })
    .catch(() => {
      throw new Error('Failed to load goods. Please try again later.');
    });
}

export const get5First = () => {
  return getAll()
    .then(goods =>
      goods
        .sort((good1, good2) => good1.name.localeCompare(good2.name))
        .slice(0, 5),
    )
    .catch(() => {
      throw new Error(
        'Failed to load the first 5 goods. Please try again later.',
      );
    }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(() => {
      throw new Error('Failed to load red goods. Please try again later.');
    }); // get only red
};
