// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;
const quantitOfVisibleGoods = 5;
const goodsColor = 'red';

const request = async() => {
  const response = await fetch(API_URL);

  return response.json();
};

export const fetchAllGoods = async() => request();

export const fetch5FirstGoods = async() => {
  const data = await request();
  const sortedGoods = data.sort(
    (currentGoods, nextGoods) => (
      currentGoods.name.localeCompare(nextGoods.name)
    ),
  );

  return sortedGoods;
};

export const fetchRedGoods = async() => {
  const data = await request();

  return data.filter(
    goods => goods.color.includes(goodsColor),
  ).slice(0, quantitOfVisibleGoods);
};
