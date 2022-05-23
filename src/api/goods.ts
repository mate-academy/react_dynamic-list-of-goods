// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const get5First = async () => {
  const good = await getAll();

  return good.slice(0, 5).sort((a, b) => a.name.localeCompare(b.name));
};

export const getRedGoods = async () => {
  const good = await getAll();

  return good.filter(item => item.color === 'red');
};
