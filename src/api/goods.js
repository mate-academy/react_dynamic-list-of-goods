// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => (
  getAll()
    .then(users => (
      users.sort((firstElement, secondElement) => {
        if (firstElement.name > secondElement.name) {
          return 1;
        }

        if (firstElement.name < secondElement.name) {
          return -1;
        }

        return 0;
      })
    ))
    .then(users => users.slice(0, 5))
);

export const getRedGoods = () => (
  getAll()
    .then(users => (users.filter(user => user.color === 'red')))
);
