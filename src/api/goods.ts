import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export enum QueryTypes {
  firstFiveGoods = 'firstFiveGoods',
  allRedGoods = 'allRedGoods',
  allGoods = 'allGoods',
}


export const getGoods = async (query: QueryTypes) => {
  const result = await fetch(API_URL);
  const goodsList: Good[] = await result.json();

  switch (query) {
    case QueryTypes.firstFiveGoods:
      return (goodsList
        .sort((first, second) => first.name.localeCompare(second.name))
        .slice(0, 5));
    case QueryTypes.allRedGoods:
      return (goodsList.filter((good) => good.color === 'red'));
    default:
      return goodsList;
  }
};
