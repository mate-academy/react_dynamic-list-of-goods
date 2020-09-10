// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  const allGoods = getAll();

  return allGoods.then(goods => goods
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .slice(0, 5));
};

export const getRedGoods = () => {
  const allGoods = getAll();

  return allGoods.then(goods => goods.filter(item => (item.color === 'red')));
};
