// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll() {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
}

export const get5First = async() => {
  const goods = await getAll();

  return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRedGoods = async() => {
  const goods = await getAll();

  return [...goods].filter(good => good.color === 'red');
};
