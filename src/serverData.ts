const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods: () => Promise<Goods> = async () => {
  const serverResponse = await fetch(API_URL);

  return serverResponse.json();
};
