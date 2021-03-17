// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First() {
  return getAll().then((goods) => {
    goods.sort((a, b) => a.name.localeCompare(b.name));

    return goods.slice(0, 5);
  });
}

export function getRedGoods() {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
}
