// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export const getFirstFive = async (): Promise<Good[]> => {
  const response = await getAll();
  const good = response.slice(0, 5);

  return good.sort((goodA: Good, goodB: Good) => (
    goodA.name.localeCompare(goodB.name)
  ));
};

export const getRedGoods = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods.filter((good: Good) => (
    good.color === 'red'));
};
