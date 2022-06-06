// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const get5First = async (): Promise<Good[]> => {
  const allGoods = await getAll();

  return allGoods
    .sort((a:Good, b:Good) => a.name.localeCompare(b.name))
    .slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const allGoods = await getAll();

  return allGoods.filter(good => good.color === 'red');
};
