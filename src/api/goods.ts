import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(
          `Can't fetch goods. Status: ${response.status} ${response.statusText}`,
        );
      }

      if (!response.headers.get('Content-Type')?.includes('application/json')) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject('Server response is not json');
      }

      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => [...goods].sort((firstGood, secondGood) => {
      return firstGood.name.localeCompare(secondGood.name);
    })
      .slice(0, 5))
    .catch(error => Promise.reject(error));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(error => Promise.reject(error));
};
