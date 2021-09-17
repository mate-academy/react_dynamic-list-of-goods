// eslint-disable-next-line
const API_URL = `https://mate.academy/students-api/goods`;

export const getAll = async () => {
  const promise = await fetch(API_URL);

  return promise.json();
};

export const get5First = async (limit = 5) => {
  const first5 = await fetch(`${API_URL}/?limit=${limit}`);

  return first5.json();
};

export const getRedGoods = async () => {
  const redGoods = await fetch(`${API_URL}/?color=red`);

  return redGoods.json();
};
