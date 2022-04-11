// eslint-disable-next-line max-len
const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const request = (url: string) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};

export const getAllGoods = (): Promise<GoodsItem[]> => request(API_URL);

export const getFirstFive = (): Promise<GoodsItem[]> => {
  return getAllGoods()
    .then(goods => (
      goods
        .sort((itemA, itemB) => (
          itemA.name.localeCompare((itemB.name))
        ))
        .slice(0, 5)
    ));
};

export const getRedGoods = (): Promise<GoodsItem[]> => {
  return getAllGoods()
    .then(goods => (
      goods.filter(({ color }) => color === 'red')
    ));
};
