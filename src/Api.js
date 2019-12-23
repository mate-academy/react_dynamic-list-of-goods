const URL
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const getGoods = () => fetch(URL)
  .then(response => response.json());

export default getGoods;
