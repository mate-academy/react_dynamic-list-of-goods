// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

async function loadData() {
  const data = await fetch(API_URL)
    .then(response => response.json());

  return data;
}

export function getAll() {
  return loadData()
    .then(goods => goods);
}

export function get5First() {
  return loadData()
    .then(goods => goods.sort((one, two) => (
      one.name.localeCompare(two.name)
    )))
    .then(goods => goods.slice(0, 5));
}

export function getRedGoods() {
  return loadData()
    .then(goods => goods.filter(good => good.color === 'red'));
}
