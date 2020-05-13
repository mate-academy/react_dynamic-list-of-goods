const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const getApiData = async (url: string) => {
  const resourses = await fetch(url);
  const goods = await resourses.json();

  return goods;
};

export const getItems = async () => {
  return getApiData(API_URL);
};
