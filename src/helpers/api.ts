
const getGoods = () => {
  const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods';
  const goods = fetch(`${API_URL}/goods.json`).then(response => response.json());

  return goods;
};

export default getGoods;
