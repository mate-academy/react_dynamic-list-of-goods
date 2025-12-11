import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Error fetching all goods', error);
      throw error;
    });
}

export const get5First = () => {
  return getAll()
    .then(goods =>
      goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
    )
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Error fetching 5 goods', error);
      throw error;
    }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(red => red.color === 'red'))
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Error fetching red Goods', error);
      throw error;
    }); // get only red
};
