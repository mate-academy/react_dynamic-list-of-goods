// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async() => {
  const items = await getAll();
  const result = [...items].slice(0, 5);

  return result.sort((a, b) => a.name.localeCompare(b.name));
};

export const getRed = async() => {
  const items = await getAll();
  const result = [...items].filter(item => item.color === 'red');

  return result;
};
