// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(new Error('Something went wrong'));
      }

      return response.json();
    });
}

export const get5First = async () => {
  const allGoods = await getAll();

  return allGoods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRedGoods = async () => {
  const allGoods = await getAll();

  return allGoods.filter(good => good.color === 'red');
};
