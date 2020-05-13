export const getGoods = () => {
  return fetch('http://localhost:3000/goods.json')
    .then(response => response.json());
};
