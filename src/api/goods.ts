import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getGoods = (type: string): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json())
    .then((goods: Good[]) => {
      switch (type) {
        case 'all':
          return goods;
        case 'firstFive':
          return goods.slice().sort(
            (a, b) => a.name.localeCompare(b.name),
          ).slice(0, 5);
        case 'red':
          return goods.filter(good => good.color === 'red');
        default:
          return [];
      }
    });
};
