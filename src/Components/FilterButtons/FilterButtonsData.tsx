import { Pattern } from '../interfaces/interfaces';

export interface Button {
  title: string;
  filterPattern: Pattern;
}

export const FilterButtonsData: Button[] = [
  {
    title: 'Load All goods',
    filterPattern: (good) => Boolean(good.id),
  },
  {
    title: 'Load 5 first goods',
    filterPattern: (good) => Number(good.id) <= 5,
  },
  {
    title: 'Load red goods',
    filterPattern: (good) => good.color === 'red',
  },
];
