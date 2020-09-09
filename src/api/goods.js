// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async() => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = async() => {
  const response = await fetch(API_URL);

  return response.json()
    .then(goods => goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5));
};

export const getRed = async() => {
  const response = await fetch(API_URL);

  return response.json()
    .then(goods => goods
      .filter(item => item.color === 'red'));
};
