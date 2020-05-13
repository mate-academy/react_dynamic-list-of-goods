const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const getData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const getGoods = async () => {
  return getData(URL);
};
