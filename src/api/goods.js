// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

async function getterData() {
  const response = await fetch(API_URL);
  const goods = await response.json();

  return goods;
}

export const getAll = async() => getterData();

export const get5First = () => getterData();

export const getRedGoods = () => getterData();
