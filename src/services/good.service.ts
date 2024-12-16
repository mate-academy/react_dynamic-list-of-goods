import { Good } from '../types/Good';

export function getGoods(): Promise<Good[]> {
  return fetch('http://localhost:5173/goods.json').then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Failed to fetch users');
  });
}
