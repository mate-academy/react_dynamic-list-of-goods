import { Good } from '../types/Good';

export function getGoods(): Promise<Good[]> {
  return fetch('https://mate-academy.github.io/'
   + 'react_dynamic-list-of-goods/goods.json')
    .then((response) => {
      return response.json();
    });
}
