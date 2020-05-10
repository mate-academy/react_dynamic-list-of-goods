
const getGoods = async () => {
  const goods = await fetch('goods.json').then(response => response.json());

  return goods;
};

export default getGoods;
