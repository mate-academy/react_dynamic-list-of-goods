
const url = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods = () => {
  return fetch(url)
    .then(responce => responce.json());
};
