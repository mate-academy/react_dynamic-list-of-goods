import { Good } from '../types/Good';

export const first5Goods = (goods: Good[]) => {
  return goods.sort((previousGood, currentGood) => (
    previousGood.name.localeCompare(currentGood.name)
  )).slice(0, 5);
};

export const onlyRedGoods = (goods: Good[]) => {
  return goods.filter(({ color }) => color === 'red');
};
