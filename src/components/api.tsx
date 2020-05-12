const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const getData = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

export const getElements = async () => {
  return getData(URL);
};
