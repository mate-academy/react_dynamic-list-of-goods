import { FilterPattern, SortPattern } from '../interfaces/interfaces';

export interface Button {
  title: string;
  filterPattern: FilterPattern;
  sortPattern?: SortPattern;
}

export const FilterButtonsData: Button[] = [
  {
    title: 'Load All goods',
    filterPattern: (good) => Boolean(good.id),
  },
  {
    title: 'Load 5 first goods',
    filterPattern: (good) => Number(good.id) <= 5,
    sortPattern: (goodA, goodB) => goodA.name.localeCompare(goodB.name),
  },
  {
    title: 'Load red goods',
    filterPattern: (good) => good.color === 'red',
  },
];
