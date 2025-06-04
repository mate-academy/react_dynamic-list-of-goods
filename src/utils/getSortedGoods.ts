import { Good } from '../types/Good';

export function getSortedGoods(goods: Good[]): Good[] {
  return goods.sort((good1, good2) => good1.name.localeCompare(good2.name));
}
