const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const geGoods = async (url: string) => {
  const goods = await fetch(url);
  const list = await goods.json();

  return list;
};

export const getElement = async () => {
  return geGoods(URL);
};
