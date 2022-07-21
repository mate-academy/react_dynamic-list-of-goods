// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  return (await fetch(API_URL)).json();
}

export const get5First = async () => {
  return getAll()
    .then(goods => (
      goods.sort((first, second) => first.name.localeCompare(second.name))
    ))
    .then(goods => goods.slice(0, 5));
};

export const getRedGoods = async () => {
  return (await getAll()).filter(product => product.color === 'red');
};
