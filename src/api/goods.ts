import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(new Error('Server dont response'));
      }

      if (!response.headers.get('content-type')?.includes('application/json')) {
        return Promise.reject(new Error('Requested file not found'));
      }

      return response.json();
    });
}

export const get5First = async (): Promise<Good[]> => {
  const allGoods = await getAll();
  const sortedGoods = allGoods.sort((prevGood, currentGood) => (
    prevGood.name.localeCompare(currentGood.name)));

  return sortedGoods.slice(0, 5);
};

export const getRedGoods = async () => {
  const allGoods = await getAll();

  return allGoods.filter(good => good.color === 'red');
};
