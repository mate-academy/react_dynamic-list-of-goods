const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoodsFromApi = () => {
  return fetch(API_URL)
    .then(response => response.json());
};
