import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goodss.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(
          new Error(`${response.status} - ${response.text}`),
        );
      }

      if (!response.headers.get('content-type')?.includes('application/json')) {
        return Promise.reject(
          new Error('Content-type is not json'),
        );
      }

      return response.json();
    })
    .catch(error => {
      window.console.warn(error);

      return [];
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      const sortedGoods = [...goods].sort((current, next) => (
        current.name.localeCompare(next.name)
      ));

      return sortedGoods.slice(0, 5);
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => {
      return goods.filter(({ color }) => color === 'red');
    });
};
