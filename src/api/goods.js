// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async() => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
};

export const get5First = async() => {
  const data = await getAll();

  data.sort((a, b) => a.name.localeCompare(b.name));

  return data.slice(0, 5);
};

export const getRedGoods = async() => {
  const data = await getAll();

  return data.filter(item => item.color === 'red');
};
