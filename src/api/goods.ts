// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAllGoods(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => (
  getAllGoods()
    .then(good => good
      .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
      .slice(0, 5))
);

export const getRedGoods = () => (
  getAllGoods()
    .then(goods => goods
      .filter((good: Good) => good.color === 'red'))
);
