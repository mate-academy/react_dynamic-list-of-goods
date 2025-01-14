import { Good } from '../types/Good';
import { getData } from '../utils/httpClient';

export function getAllGoods() {
  return getData<Good[]>('/goods.json').then(goods => goods);
}

export function get5FirstGoods() {
  return getData<Good[]>('/goods.json').then(goods =>
    goods
      .sort((goodA: Good, goodB: Good) => goodA.name.localeCompare(goodB.name))
      .slice(0, 5),
  );
}

export function getRedGoods() {
  return getData<Good[]>('/goods.json').then(goods =>
    goods.filter(good => good.color === 'red'),
  );
}
