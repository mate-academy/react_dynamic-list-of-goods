import { Good } from './types/Good';

export const getGoods = (): Promise<Good[]> => {
  return fetch(
    'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json',
  ).then((response) => {
    if (!response.ok) {
      throw new Error('Error');
    }

    return response.json();
  });
};
