// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async() => {
  const data = await getAll();

  return data.slice(0, 5)
    .sort((a, b) => a.name.localeCompare(b.name));
};

export const getRedGoods = async() => {
  const data = await getAll();

  return data.filter(item => item.color === 'red');
};
