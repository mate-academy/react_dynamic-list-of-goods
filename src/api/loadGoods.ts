export const loadGoods = (): Promise<Good[]> => {
  return fetch('https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json')
    .then(response => response.json());
};
