import { Good } from './types/Good';

export function getGoods(): Promise<Good[]> {
  // eslint-disable-next-line
  return fetch(`https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Failed to load data');
  });
}
