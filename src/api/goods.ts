// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAllGoods(): Promise<Good[]> {
  const goods = await fetch(API_URL);

  return goods.json();
}

export async function getFiveFirst(): Promise<Good[]> {
  const goods = await getAllGoods();

  return [...goods]
    .sort((goodA, goodB) => (
      goodA.name.localeCompare(goodB.name)
    ))
    .slice(0, 5);
}

export async function getRedGoods(): Promise<Good[]> {
  const goods = await getAllGoods();

  return goods.filter(good => good.color === 'red');
}
