// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

type Goods = {
  id: number,
  name: string,
  color: string,
};

export function getAll() {
  return fetch(API_URL)
    .then(res => {
      if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
      }

      return res.json();
    });
}

export const loadGoods = () => {
  return getAll();
};

export const get5First = () => {
  return getAll().then(goods => {
    const result = goods.splice(0, 5);

    return result;
  });
};

export const getRedGoods = () => {
  return getAll().then(goods => {
    return goods.filter((item: Goods) => item.color === 'red');
  });
};
