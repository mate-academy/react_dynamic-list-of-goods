const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getAll = async (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} – ${response.statusText}`);
      }

      return response.json();
    });
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(g => g.color === 'red'));
};

export const get5First = () => {
  return getAll()
    .then(goods => {
      goods.sort((a, b) => a.name.localeCompare(b.name));

      return goods.slice(0, 5);
    });
};
