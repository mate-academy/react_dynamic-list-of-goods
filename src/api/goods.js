// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const fetchAllGoods = async() => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
};

export const fetch5FirstGoods = async() => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const sortedGoods = data.sort(
    (currentGoods, nextGoods) => (
      currentGoods.name.localeCompare(nextGoods.name)
    ),
  );

  return sortedGoods;
};

export const fetchRedGoods = async() => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.filter(
    goods => goods.color === 'red',
  );
};
