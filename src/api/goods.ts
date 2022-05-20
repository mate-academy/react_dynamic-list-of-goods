// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const getFiveFirst = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.filter((good: Good) => good.color === 'red');
};
