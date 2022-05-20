// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const firstFive = data.slice(0, 5);

  return firstFive.sort((a: Good, b: Good) => a.name.localeCompare(b.name));
};

export const getRed = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.filter((product: Good) => product.color === 'red');
};
