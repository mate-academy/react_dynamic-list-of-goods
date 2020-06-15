import { Good } from './types';

const goodsUrl = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function loadGoods(): Promise<Good[]> {
  return fetch(goodsUrl)
    .then(res => res.json());
}
