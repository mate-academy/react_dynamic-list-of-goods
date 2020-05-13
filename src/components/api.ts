const BASE_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods//goods.json';

export const getGoods = () => {
  return fetch(BASE_URL)
    .then(response => response.json());
};
