// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAllGoods = async() => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
};

export const get5FirstGoods = async() => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
};

export const getRedGoods = async() => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
};
