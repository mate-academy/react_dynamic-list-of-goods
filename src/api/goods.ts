// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => (
  getAll()
    .then(user => (
      user.sort(
        (userA, userB) => userA.name.localeCompare(userB.name),
      ).slice(0, 5)
    ))
);

export const getRedGoods = () => (
  getAll()
    .then(user => (
      user.filter(good => good.color === 'red')
    ))
);
