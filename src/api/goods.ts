// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  return (await getAll()).sort((goodItem1, goodItem2) => (
    goodItem1.name.localeCompare(goodItem2.name)
  )).slice(0, 5);
};

export const getRedGoods = async () => {
  return (await getAll()).filter(goodItem => (
    goodItem.color === 'red'
  ));
};
