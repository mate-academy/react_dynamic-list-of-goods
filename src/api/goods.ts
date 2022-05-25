// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);
    const goods: Good[] = await response.json();

    return goods;
  } catch (error) {
    throw new Error(`There is a problem: ${error}`);
  }
}

export const get5First = async () => {
  const goods = await getAll();

  return goods
    .sort((g1, g2) => (g1.name.localeCompare(g2.name)))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
