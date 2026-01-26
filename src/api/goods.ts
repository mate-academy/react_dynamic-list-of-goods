import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;
const FILTER_COLOR = 'red';

function request<T>(url: string): Promise<T> {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`Request failed. Status: ${response.status}`);
    }

    return response.json();
  });
}

export function getAll(): Promise<Good[]> {
  return request<Good[]>(API_URL);
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods => {
    return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  });
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => {
    return goods.filter(good => good.color === FILTER_COLOR);
  });
};
