// eslint-disable-next-line
const BASE_URL
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const options = { method: 'GET' };

export const getAll = () => fetch(BASE_URL, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  });

export const get5First = () => getAll()
  .then(goods => goods.slice(0, 5)
    .sort((a, b) => (a.name).localeCompare(b.name)));

export const getRedGoods = () => getAll()
  .then(goods => goods.filter(good => good.color === 'red'));
