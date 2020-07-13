const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const getGoods = async (url: string) => (
  fetch(url).then(response => response.json())
);

export const getGoodsFromServer = async () => (
  getGoods(API_URL)
);
