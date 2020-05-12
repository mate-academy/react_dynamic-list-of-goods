
const getGoods = async () => {
  const API_URL = 'http://localhost:3000';
  const goods = await fetch(`${API_URL}/goods.json`).then(response => response.json());

  return goods;
};

export default getGoods;
