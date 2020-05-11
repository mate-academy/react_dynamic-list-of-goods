const url = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods = async () => {
  const response = await fetch(url);

  return response.json();
};
