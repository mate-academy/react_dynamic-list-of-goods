import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = (url: string): Promise<Good[]> => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(
          Error(`${response.statusText}`),
        );
      }

      if (!response.headers.get('content-type')?.includes('application/json')) {
        return Promise.reject(
          Error('Content type not supported'),
        );
      }

      return response.json();
    })
    .catch(error => {
      throw Error('Error: ', error);
    });
};

export const getAll = () => {
  return request(API_URL);
};

export const get5First = () => {
  return getAll()
    .then(goods => goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods
      .filter(({ color }) => color === 'red'));
};
