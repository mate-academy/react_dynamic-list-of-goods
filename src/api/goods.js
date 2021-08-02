// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = () => fetch(API_URL)
  .then((res) => {
    if (!res.ok) {
      throw new Error('Error');
    }

    return res.json();
  });

export const getAll = () => request();

export const get5First = () => request()
  .then(goods => goods
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5));

export const getRed = () => request()
  .then(goods => goods.filter(good => good.color === 'red'));
