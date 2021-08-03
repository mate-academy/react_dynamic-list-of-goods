// eslint-disable-next-line
const BASE_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(BASE_URL)
    .then(response => response.json());
}

export const get5First = async() => {
  const goods = await getAll();

  return goods.filter(good => good.id <= 5);
};

export const getRedGoods = async() => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
