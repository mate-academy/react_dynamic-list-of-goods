// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function wait(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getAll() {
  await wait(2000);

  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => getAll()
  .then(response => response
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5));

export const getRedGoods = () => getAll()
  .then(response => response
    .filter(good => good.color === 'red'));
