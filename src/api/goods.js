// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(
      (error) => {
      // eslint-disable-next-line
        console.error(error);

        return null;
      },
    );
}

export const get5First = async() => (
  await getAll() !== null && getAll().then(goods => goods.sort(
    (prev, next) => prev.name.localeCompare(next.name),
  ).slice(0, 5))
);

export const getRedGoods = async() => (
  await getAll() !== null && getAll().then(
    goods => goods.filter(good => good.color === 'red'),
  )
);
