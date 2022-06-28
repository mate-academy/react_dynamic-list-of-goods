// eslint-disable-next-line max-len
const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const get5First = async () => {
  const goods = await getAll();

  // eslint-disable-next-line max-len
  return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRed = async () => {
  const goods = await getAll();

  return goods.filter(item => item.color === 'red');
};
