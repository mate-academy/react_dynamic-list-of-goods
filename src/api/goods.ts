import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function checkResponse(response: Response): Promise<Good[]> {
  if (!response.ok) {
    return Promise.reject(new Error(`http error! status: ${response.status}`));
  }

  return response.json();
}

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(checkResponse);
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods => {
    return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  }); // sort and get the first 5
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};
