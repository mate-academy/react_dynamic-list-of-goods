const getData = async (URL: string) => {
  const goods = await fetch(URL);
  const list = await goods.json();

  return list;
};

export const GetElement = async () => {
  const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

  return getData(URL);
};
