// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async() => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = async() => {
  const first5Items = await getAll();

  return first5Items
    .sort((item1, item2) => (item1.name).localeCompare(item2.name))
    .slice(0, 5);
};

export const getRedGoods = async() => {
  const redItems = await getAll();

  return redItems.filter(item => item.color === 'red');
};
