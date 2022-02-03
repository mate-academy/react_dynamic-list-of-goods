// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAllGoods = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return await response.json();
}

export const getFiveFirst = async () => {
  const goods = await getAllGoods();
  const sortedGoods = [...goods]
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5)

  return sortedGoods;
};

export const getRedGoods = async () => {
  const goods = await getAllGoods();
  const filteredGoods = goods.filter(good => good.color === 'red');

  return filteredGoods;
};
