const DATA_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods = () => {
  return fetch(DATA_URL)
    .then(response => response.json());
};
