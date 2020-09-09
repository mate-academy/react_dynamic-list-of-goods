// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async() => {
  const allGoods = await getAll();
  const goods = allGoods
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);

  return goods;
};

export const getRedGoods = async() => {
  const allGoods = await getAll();
  const goods = allGoods.filter(good => good.color === 'red');

  return goods;
};
