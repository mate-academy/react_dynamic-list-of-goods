// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export function getFive(): Promise<Good[]> {
  return getAll()
    .then(goodsFromServer => goodsFromServer.slice(0, 5));
}

export function getRed(): Promise<Good[]> {
  return getAll()
    .then(goodsFromServer => goodsFromServer.filter((good:Good) => good.color === 'red'));
}
