// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

// eslint-disable-next-line arrow-body-style
export const get5First = () => {
  return (
    fetch(API_URL)
      .then(response => response.json())
      .then(goods => [...goods]
        .sort((a, b) => (a.name.localeCompare(b.name)))
        .filter((good, index) => index <= 4))
  );
};

// eslint-disable-next-line arrow-body-style
export const getRedGoods = () => {
  return (
    fetch(API_URL)
      .then(response => response.json())
      .then(goods => goods.filter(good => good.color === 'red'))
  );
};
