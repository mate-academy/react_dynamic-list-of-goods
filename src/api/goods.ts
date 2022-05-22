// eslint-disable-next-line
export const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => (
  getAll()
    .then(goods => goods
      .slice(0, 5)
      .sort((a, b) => a.name.localeCompare(b.name)))
);

export const getRedGoods = () => (
  getAll()
    .then(goods => goods
      .filter(good => good.color === 'red'))
);
