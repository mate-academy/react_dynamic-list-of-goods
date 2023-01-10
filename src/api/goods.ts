// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<GoodsItem[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

export const get5First = (): Promise<GoodsItem[]> => {
  return getAll()
    .then(goods => (
      goods
        .sort((itemA, itemB) => (
          itemA.name.localeCompare((itemB.name))
        ))
        .slice(0, 5)
    ));
};

export const getRed = (): Promise<GoodsItem[]> => {
  return getAll()
    .then(goods => (
      goods.filter(({ color }) => color === 'red')
    ));
};
