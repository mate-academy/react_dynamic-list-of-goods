// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  const data = fetch(API_URL)
    .then(response => response.json());

  return data;
}

export const get5First = () => {
  const data = getAll()
    .then(goods => goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5));

  return data;
};

export const getRedGoods = () => {
  const data = getAll()
    .then(goods => goods
      .filter(good => good.color === 'red'));

  return data;
};
