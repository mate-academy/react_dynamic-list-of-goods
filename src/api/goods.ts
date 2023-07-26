import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function handleResponse(response: Response) {
  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(handleResponse)
    .catch(() => Promise.reject(new Error('Try again later')));
}

export const get5First = () => {
  return getAll()
    .then(goods => goods.sort((a, b) => a.name.localeCompare(b.name)))
    .then((sortedGoods: Good[]) => sortedGoods.slice(0, 5))
    .catch(() => Promise.reject(new Error('Try again later')));
};

export const getRedGoods = () => {
  return getAll()
    .then((goods: Good[]) => goods.filter(good => good.color === 'red'))
    .catch(() => Promise.reject(new Error('Try again later')));
};
