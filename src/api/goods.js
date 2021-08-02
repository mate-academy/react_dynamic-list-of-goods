// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => goods
      .sort((good1, good2) => good1.name.localeCompare(good2.name)))
    .then(sortedGoods => sortedGoods.slice(0, 5));
}

export function getRed() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => goods
      .sort((good1, good2) => good1.name.localeCompare(good2.name)))
    .then(goods => goods
      .filter(good => good.color === 'red'));
}
