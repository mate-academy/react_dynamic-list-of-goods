/* eslint-disable */
const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods = () => {
  const promise = fetch(URL)
    .then(response => response.json());

  return promise;
};
