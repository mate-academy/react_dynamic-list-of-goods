// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const get5First = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const first5 = await response.json();
  const good = first5.slice(0, 5);

  return good.sort((goodA: Good, goodB: Good) => (
    goodA.name.localeCompare(goodB.name)));
};

export const getRedGoods = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const goods = await response.json();

  return goods.filter((good: Good) => good.color === 'red');
};
