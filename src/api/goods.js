// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function fetchList() {
  const response = await fetch(API_URL);

  return response.json();
}

export function getAll() {
  return fetchList().then(list => list);
}

export const get5First = () => {
  const result = fetchList().then(list => list
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5));

  return result;
};

export const getRedGoods = () => {
  const result = fetchList().then(goods => goods
    .filter(item => item.color === 'red'));

  return result;
};
