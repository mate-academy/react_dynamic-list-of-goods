const goodsApiUrl = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods = (): Promise<Good[]> => {
  return fetch(goodsApiUrl)
    .then(response => response.json());
};
