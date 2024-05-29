import { getAll, get5First, getRedGoods } from '../api/goods';

export function getAllGoods() {
  return getAll().then(goods => goods);
}

export function getFiveFirstGoods() {
  return get5First().then(goods =>
    goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  );
}

export function getRedColorGoods() {
  return getRedGoods().then(goods =>
    goods.filter(good => good.color === 'red'),
  );
}
