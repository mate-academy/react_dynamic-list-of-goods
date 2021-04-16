// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export async function get5First() {
  const goodsList = await getAll();

  return goodsList.sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
}

export async function getRed() {
  const goodsList = await getAll();

  return goodsList.filter(good => good.color === 'red');
}
