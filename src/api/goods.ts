// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAllGoods(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const getFiveFirst = async () => {
  const goods = await getAllGoods();

  return [...goods]
    .sort((firstGood, secondGood) => firstGood.name.localeCompare(secondGood.name))
    .splice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAllGoods();

  return [...goods].filter(good => good.color === 'red');
};
