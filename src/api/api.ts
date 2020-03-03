const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods = (): Promise<Props[]> => {
  return fetch(URL)
    .then(response => response.json());
};
