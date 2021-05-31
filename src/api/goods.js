// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const requst = url => fetch(url).then(response => response.json());

export function getAll() {
  return requst(API_URL);
}

export function get5First() {
  return requst(API_URL)
    .then(goods => goods.sort(
      (a, b) => (a.name).localeCompare(b.name),
    )
      .slice(0, 5));
}

export function getRedGoods() {
  return requst(API_URL)
    .then(goods => goods.filter(good => good.color === 'red'));
}
