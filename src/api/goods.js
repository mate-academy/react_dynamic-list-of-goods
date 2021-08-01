// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async() => {
  const goods = await getAll();
  const firsFiveGoods = [...goods]
    .sort((firsGood, secondGood) => firsGood.name
      .localeCompare(secondGood.name))
    .slice(0, 5);

  return firsFiveGoods;
};

export const getRedGoods = async() => getAll()
  .then(goods => goods.filter(good => good.color === 'red'));
