export const getGoods = async () => {
  const response = await fetch('https://mate.academy/students-api/goods');
  const goods = await response.json();

  return goods.data;
};
