
export const getGoods = () => {
  return fetch('https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json')
    .then(res => res.json());
};
