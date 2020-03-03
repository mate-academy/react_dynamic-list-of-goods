const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods: () => Promise<Good[]> = async () => {
  const response = await fetch(API_URL);

  return response.json();
};
