// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = async (): Promise<Good[]> => {
  const response = await getAll();
  const sortedGoods = response.sort(
    (firstGood, secondGood) => firstGood.name.localeCompare(secondGood.name),
  );

  return sortedGoods.slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const response = await getAll();
  const filteredGoods = response.filter(good => good.color === 'red');

  return filteredGoods;
};
