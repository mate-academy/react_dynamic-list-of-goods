const url
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const getGoods = () => fetch(url)
  .then(response => response.json())
  .catch(() => 'Something went wrong');

export default getGoods;
