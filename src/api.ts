const GOODS_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

type GoodsLoader = () => Promise<Good[]>;

export const getGoods: GoodsLoader = () => {
  return fetch(GOODS_URL)
    .then(response => response.json());
};
