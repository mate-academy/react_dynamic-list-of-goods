// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  // eslint-disable-next-line max-len
  return fetch('https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json')
    .then(response => response.json());
}

export const get5First = async() => {
  const result = await getAll();

  return result.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRed = async() => {
  const result = await getAll();

  return result.filter(el => el.color === 'red');
};
