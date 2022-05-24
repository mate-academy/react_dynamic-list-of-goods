// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const responce = await fetch(API_URL);

  return responce.json();
}

export const get5First = async () => {
  const data = await getAll();

  return data.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRedGoods = async () => {
  const data = await getAll();

  return data.filter(good => good.color === 'red');
};
