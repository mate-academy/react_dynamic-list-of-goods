// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response: Response = await fetch(API_URL);

  return response.json();
};

export const get5First = async (): Promise<Good[]> => {
  const response = await getAll();

  return response.sort().slice(0, 5);
};

export const getRed = async (): Promise<Good[]> => {
  const response = await getAll();

  return response.filter((item: Good) => item.color === 'red');
};
