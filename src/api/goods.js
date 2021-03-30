// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async() => {
  const goods = await getAll();
  const result = goods.slice(0, 5);

  return result;
};

export const getRed = async() => {
  const goods = await getAll();
  const result = goods.filter(good => (good.color === 'red'));

  return result;
};
