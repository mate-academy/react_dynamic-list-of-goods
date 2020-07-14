import { Goods } from './interface';

export const loadGoods = (): Promise<Goods[]> => {
  const goods = fetch('https://mate.academy/students-api/goods')
    .then(response => response.json())
    .then(response => response.data);

  return goods;
};
