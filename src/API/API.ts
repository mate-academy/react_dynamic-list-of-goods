export const getGoods = () => {
  const goods = fetch('/goods.json')
    .then(response => response.json());

  return goods;
};
