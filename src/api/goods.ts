// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First(): Promise<Good[]> {
  return getAll()
    .then(details => details.sort((a: Good, b: Good) => a.name.localeCompare(b.name)))
    .then(goods => goods.slice(0, 5));
}

export function getRedGoods(): Promise<Good[]> {
  return getAll()
    .then(details => details.filter((good: Good) => good.color === 'red'));
}
