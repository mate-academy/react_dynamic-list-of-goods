// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll() {
  const response = await fetch(API_URL);
  const goods = await response.json();

  return goods;
}

export async function getFirstFive() {
  const response = await fetch(API_URL);
  const goods = await response.json();

  [...goods].sort((goodA: Good, goodB: Good) => (
    goodA.name.localeCompare(goodB.name)
  ));

  return goods.slice(0, 5);
}

export async function getRedGoods() {
  const response = await fetch(API_URL);
  const goods = await response.json();

  return goods.filter((good: Good) => (
    good.color === 'red'
  ));
}
