// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  const allGoods = getAll();

  return allGoods
    .then(good => good.sort((prev, next) => prev.name.localeCompare(next.name))
      .splice(0, 5));
};

export const getRedGoods = () => {
  const allGoods = getAll();

  return allGoods
    .then(goods => goods.filter((good) => good.color === 'red'));
};
