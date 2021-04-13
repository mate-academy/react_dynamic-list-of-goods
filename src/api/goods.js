// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async() => {
  const result = await getAll();

  return result.slice(0, 5);
};

export const getRedGoods = async() => {
  const result = await getAll();

  return result.filter(product => product.color === 'red');
};
