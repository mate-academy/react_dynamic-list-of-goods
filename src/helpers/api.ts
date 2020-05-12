
const getGoods = () => {
  const API_URL = 'http://localhost:3000';
  const goods = fetch(`${API_URL}/goods.json`).then(response => response.json());

  return goods;
};

export default getGoods;
