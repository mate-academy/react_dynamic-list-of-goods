const GOODS_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods = (): Promise<Goods> => {
  return fetch(GOODS_URL)
    .then(response => response.json());
};
