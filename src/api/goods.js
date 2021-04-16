// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAllGoods() {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5FirstGoods() {
  return getAllGoods()
    .then(goods => goods.sort((currGood, nextGood) => (
      currGood.name.localeCompare(nextGood.name))).slice(0, 5));
}

export function getRedGoods() {
  return getAllGoods()
    .then(goods => goods.filter(good => good.color === 'red'));
}
