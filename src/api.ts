const goodsApiUrl = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods = () => {
  return fetch(goodsApiUrl)
    .then(response => response.json());
};
