const getGoods = (): Promise<Good[]> => {
  const goods = fetch('https://mate.academy/students-api/goods')
    .then(response => response.json())
    .then(response => response.data);

  return goods;
};

export default getGoods;
