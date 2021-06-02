// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getResponse = () => fetch(API_URL)
  .then(response => response.json());

export const get5First = () => fetch(API_URL)
  .then(response => response.json())
  .then((goodsList) => {
    const preparedList = goodsList
      .sort((firstGood, secondGood) => (
        firstGood.name.localeCompare(secondGood.name)
      ))
      .slice(0, 5);

    return preparedList;
  });

export const getRedGoods = () => fetch(API_URL)
  .then(response => response.json())
  .then((goodsList) => {
    const preparedList = goodsList.filter(good => good.color === 'red');

    return preparedList;
  });
