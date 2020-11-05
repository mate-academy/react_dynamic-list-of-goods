// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = (url = '') => fetch(`${API_URL}${url}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  });

export const getAll = () => request();

export const get5First = () => request()
  .then(response => response
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5));

export const getRedGoods = () => request()
  .then(response => response.filter(good => good.color === 'red'));
