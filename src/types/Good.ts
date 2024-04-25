export interface Good {
  id: number;
  name: string;
  color: string;
}

export enum SortType {
  All = 'All',
  First5 = 'First5',
  Red = 'Red',
}
