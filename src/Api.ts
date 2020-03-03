import { Good } from './interfaces';

const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods = (): Promise<Good[]> => {
  const goods = fetch(URL)
    .then(response => response.json());

  return goods;
};
