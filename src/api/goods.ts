// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const get5First = async () => {
  const data = await getAll();

  const sorted = data.sort((a, b) => a.name.localeCompare(b.name));

  return sorted.slice(0, 5);
};

export const getRedGoods = async () => {
  const array = await getAll();

  return array.filter((item: Good) => item.color === 'red');
};
