// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAllGoods = async() => {
  const request = await fetch(API_URL);
  const result = await request.json();

  return result;
};

export const get5FirstGoods = async() => {
  const request = await fetch(API_URL);
  const result = await request.json();

  const sortedByName = result.sort(
    (currentGoods, nextGoods) => (
      currentGoods.name.localeCompare(nextGoods.name)
    ),
  );

  return sortedByName.slice(0, 5);
};

export const getRedGoods = async() => {
  const request = await fetch(API_URL);
  const result = await request.json();

  const filteredByColor = result.filter(
    goods => goods.color === 'red',
  );

  return filteredByColor;
};
