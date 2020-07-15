const getGoods = (): Promise<Good[]> => {
  return fetch('https://mate.academy/students-api/goods')
    .then(response => response.json())
    .then(response => response.data);
};

export default getGoods;
