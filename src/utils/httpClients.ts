import { Good } from '../types/Good';

const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}
