
const getGoods = () => {
  const API_URL = 'https://github.com/nchuhrina/react_dynamic-list-of-goods/blob/c1ba1d1595d51757b1526d6cb8b3a970bfe8196e';
  const goods = fetch(`${API_URL}/goods.json`).then(response => response.json());

  return goods;
};

export default getGoods;
