import { Good } from './types/Good';

export const sortGoods = (goods: Good[], field: keyof Good) => {
  const sortedGoods = window.structuredClone(goods);

  return sortedGoods.sort((a, b) => {
    if (typeof a[field] === 'string' && typeof b[field] === 'string') {
      return a[field].localeCompare(b[field]);
    }

    if (typeof a[field] === 'number' && typeof b[field] === 'number') {
      return a[field] - b[field];
    }

    return 0;
  });
};

export const filterGoods = (
  goods: Good[],
  field: keyof Good,
  filter: string,
) => {
  return goods.filter(good => good[field] === filter);
};
