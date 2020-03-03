const DATA_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getData = async () => {
  const response = await fetch(DATA_URL);

  return response.json();
};
