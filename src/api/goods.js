// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const getGoods = () => fetch(API_URL)
  .then((response) => {
    if (!response.ok) {
      return Promise.reject(new Error('Somthimg going wrong'));
    }

    return response.json();
  })
  .catch((error) => {
    alert.error('Error', error);
  });

export function getAll() {
  return getGoods();
}

export const get5First = () => getAll()
  .then(goods => goods
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5));

export const getRedGoods = () => getAll()
  .then(goods => goods.filter(good => good.color === 'red'));
