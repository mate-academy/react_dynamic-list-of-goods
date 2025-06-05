import { Good } from '../types/Good';

export function getSortedGoods(goods: Good[]): Good[] {
  const copyGoods = [...goods];
  const sortedGoods = copyGoods.sort((goodA, goodB) =>
    goodA.name.localeCompare(goodB.name),
  );

  return sortedGoods;
}
