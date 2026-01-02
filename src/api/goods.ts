import { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

function request(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error('Failed to load goods');
    }

    return response.json();
  });
}

export function getAll(): Promise<Good[]> {
  return request();
}

export function get5First(): Promise<Good[]> {
  return request().then(goods =>
    [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  );
}

export function getRedGoods(): Promise<Good[]> {
  return request().then(goods => goods.filter(good => good.color === 'red'));
}
