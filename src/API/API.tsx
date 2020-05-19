const getGoods = async () => {
  const goodsJSON = await fetch('goods.json').then(response => response.json());

  return goodsJSON;
};

export default getGoods;
