import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch all goods');
      }

      return response.json();
    })
    .catch(error => {
      // eslint-disable-next-line
      console.error('Error in getAll:', error);
      throw error;
    });
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods =>
      goods.sort((good1, good2) => good1.name.localeCompare(good2.name)),
    )
    .then(goods => goods.slice(0, 5)) // sort and get the first 5
    .catch(error => {
      // eslint-disable-next-line
      console.error('Error in get5First:', error);
      throw error;
    });
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods.filter(({ color }) => color === 'red')) // get only red
    .catch(error => {
      // eslint-disable-next-line
      console.error('Error in getRedGoods:', error);
      throw error;
    });
};
