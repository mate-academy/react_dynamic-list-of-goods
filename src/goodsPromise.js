// eslint-disable-next-line
const goodsURL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export default fetch(goodsURL)
  .then(response => response.json());
